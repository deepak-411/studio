import Link from "next/link";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";

type HeaderProps = {
    title: string;
    user: string;
}

export default function Header({ title, user }: HeaderProps) {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-card/80 shadow-sm backdrop-blur">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-4">
                    <Link href="/">
                        <Image src="https://mychildmate.in/AdmissionForm/img/holywritlogo_512_512.png" alt="Logo" width={40} height={40} className="rounded-full"/>
                    </Link>
                    <h1 className="font-headline text-xl font-bold text-foreground">{title}</h1>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground hidden sm:inline">Welcome, {user}</span>
                    <Button variant="ghost" size="icon" asChild>
                       <Link href="/auth">
                         <LogOut className="h-5 w-5" />
                       </Link>
                    </Button>
                </div>
            </div>
        </header>
    )
}
