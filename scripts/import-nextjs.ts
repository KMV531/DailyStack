import Parser from "rss-parser";
import { writeClient } from "../src/sanity/lib/client.ts";

const parser = new Parser();

// How many months back we keep articles
const MONTHS_BACK = 2;

// Utility: get date X months back
function getCutoffDate(monthsBack: number): Date {
  const cutoff = new Date();
  cutoff.setMonth(cutoff.getMonth() - monthsBack);
  return cutoff;
}

async function main() {
  try {
    // -----------------------------------------------------
    // 1. LIST OF FEEDS (grouped and clean)
    // -----------------------------------------------------
    const feeds = [
      // -------------------------
      // Core Stack (Next.js, React, TypeScript)
      // -------------------------
      { url: "https://nextjs.org/feed.xml", source: "Next.js Official" },
      { url: "https://reactjs.org/feed.xml", source: "React Official" },
      {
        url: "https://devblogs.microsoft.com/typescript/feed/",
        source: "TypeScript Dev Blog",
      },

      // -------------------------
      // Supporting Tech (Tailwind/Design)
      // -------------------------
      {
        url: "https://www.smashingmagazine.com/feed/",
        source: "Smashing Magazine (Design/UX)",
      },

      // -------------------------
      // Community, Trends & Market Demand
      // -------------------------
      { url: "https://dev.to/feed", source: "DEV Community" },
      { url: "https://hnrss.org/frontpage", source: "Hacker News (Trends)" },

      // -------------------------
      // The Essential Break
      // -------------------------
      {
        url: "https://www.animenewsnetwork.com/all/rss.xml",
        source: "Anime News Network (ANN)",
      },
    ];

    // -----------------------------------------------------
    // 2. CUT-OFF DATE (older posts will be deleted)
    // -----------------------------------------------------
    const cutoffDate = getCutoffDate(MONTHS_BACK);
    console.log("Deleting posts older than:", cutoffDate.toISOString());

    // -----------------------------------------------------
    // 3. DELETE OLD POSTS BEFORE IMPORTING NEW
    // -----------------------------------------------------
    const oldPosts = await writeClient.fetch(
      `*[_type == "post" && publishedAt < $cutoff]._id`,
      { cutoff: cutoffDate.toISOString() }
    );

    if (oldPosts.length > 0) {
      console.log(`Found ${oldPosts.length} old posts → deleting...`);
      const tx = writeClient.transaction();
      oldPosts.forEach((id: string) => tx.delete(id));
      await tx.commit();
      console.log("Old posts deleted successfully.");
    } else {
      console.log("No old posts to delete.");
    }

    // -----------------------------------------------------
    // 4. IMPORT NEW ARTICLES FROM FEEDS
    // -----------------------------------------------------
    for (const feedInfo of feeds) {
      const feed = await parser.parseURL(feedInfo.url);

      console.log(
        `\n----------------------------------------\n` +
          `Source: ${feedInfo.source}\nTotal articles: ${feed.items.length}`
      );

      const recentArticles = feed.items.filter((item) => {
        if (!item.pubDate) return false;

        const published = new Date(item.pubDate);
        return published >= cutoffDate;
      });

      console.log(
        `Recent ${feedInfo.source} articles (>= cutoff):`,
        recentArticles.length
      );

      // -----------------------------------------------------
      // 5. PROCESS RECENT ARTICLES
      // -----------------------------------------------------
      for (const item of recentArticles) {
        console.log("Processing:", item.title);

        // Skip if URL already exists
        const existing = await writeClient.fetch(
          '*[_type == "post" && url == $url]{_id}',
          { url: item.link }
        );

        if (existing.length > 0) {
          console.log("Already exists → skipping:", item.title);
          continue;
        }

        // Create the new post
        try {
          await writeClient.create({
            _type: "post",
            title: item.title,
            url: item.link,
            publishedAt: item.pubDate,
            source: feedInfo.source,
          });

          console.log("Created successfully:", item.title);
        } catch (err) {
          console.error("Error creating article:", item.title, err);
        }
      }
    }

    // -----------------------------------------------------
    // 6. FINAL LOG
    // -----------------------------------------------------
    console.log("\n----------------------------------------");
    console.log("IMPORT COMPLETED SUCCESSFULLY.");
    console.log("----------------------------------------\n");
  } catch (error) {
    console.error("Fatal error in RSS Importer:", error);
  }
}

main();
