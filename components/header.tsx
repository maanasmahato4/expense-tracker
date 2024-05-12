import { getServerSession } from "next-auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import Image from "next/image";

export default async function Header() {
  const session = (await getServerSession()) || {
    user: { username: "guest", image: null },
  };
  return (
    <header className="p-4 flex flex-row items-center justify-between">
      <div className="flex flex-row items-center justify-between w-[25%]">
        <h1 className="text-4xl font-bold">Uber</h1>

        <Link href="/ride" className="font-semibold flex flex-row gap-x-2">
          <Image src="/assets/car.svg" alt="Car" width={24} height={24} />
          <span>Ride</span>
        </Link>

        <Link href="/package" className="font-semibold flex flex-row gap-x-2">
          <Image
            src="/assets/package.svg"
            alt="Package"
            width={24}
            height={24}
          />
          <span>Package</span>
        </Link>
      </div>
      <Avatar>
        <AvatarImage src={""} />
        <AvatarFallback>
          {session?.user?.name
            ? session.user.name.substring(0, 2).toLocaleUpperCase()
            : session.user.username.substring(0, 2).toLocaleUpperCase()}
        </AvatarFallback>
      </Avatar>
    </header>
  );
}
