import Image from "next/image";
import Link from "next/link";
import chat from "../../public/icons8-whatsapp-color/icons8-whatsapp-144.svg";

export default function ChatButton() {
  return (
    <Link
      href="https://wa.me/2347060469068"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="
fixed bottom-6 right-6
z-50
w-14 h-14
flex items-center justify-center
transition
hover:scale-110
drop-shadow-lg
"
    >
      <div className="relative w-full h-full">
        <Image
          src={chat}
          alt="WhatsApp chat"
          fill
          className="object-contain"
          sizes="(max-width: 640px) 40px, 56px"
        />
      </div>
    </Link>
  );
}
