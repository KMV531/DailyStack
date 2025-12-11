import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export function MobileNav() {
  const t = useTranslations("Header");

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu width={50} height={30} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="hidden">Mobile Navigation Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col items-center justify-between space-y-8 text-white my-40">
          {/* LINK 1: Wrapped with SheetClose */}
          <SheetClose asChild>
            <Link href={"/"} data-cursor="clickable">
              {t("link1")}
            </Link>
          </SheetClose>

          {/* LINK 2: Wrapped with SheetClose */}
          <SheetClose asChild>
            <Link href={"/articles"} data-cursor="clickable">
              {t("link2")}
            </Link>
          </SheetClose>
        </nav>
        <SheetFooter>
          <SheetClose asChild>
            <Button>{t("link3")}</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
