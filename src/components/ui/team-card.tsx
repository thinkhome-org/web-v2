"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Card } from "./card";
import { IconMail, IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react";

type Person = {
  name: string;
  role: string;
  email?: string;
  image?: string;
  slug?: string;
  links?: { linkedin?: string; github?: string };
};

export default function TeamCard({ person, slug }: { person: Person; slug: string }) {
  const router = useRouter();

  return (
    <Card
      onClick={() => router.push(`/nas-tym/${slug}`)}
      className="group cursor-pointer backdrop-blur-md bg-white/5 border border-white/20
                 hover:bg-white/8 hover:border-white/30 transition-all duration-300 overflow-hidden"
    >
      <div className="p-6 flex flex-col items-center text-center space-y-4">
        <div className="relative">
          {person.image ? (
            <div
              className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-white/10
                            group-hover:ring-accent/30 transition-all duration-300"
            >
              <Image
                src={person.image}
                alt={person.name}
                width={80}
                height={80}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          ) : (
            <div
              className="w-20 h-20 rounded-full bg-gradient-to-br from-accent/20 to-accent/10
                            ring-2 ring-white/10 group-hover:ring-accent/30 transition-all duration-300
                            flex items-center justify-center"
            >
              <span className="text-accent font-bold text-xl">
                {person.name.charAt(0).toUpperCase()}
              </span>
            </div>
          )}
          <div
            className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent/20 rounded-full
                          group-hover:bg-accent/30 transition-colors"
          ></div>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-accent transition-colors">
            {person.name}
          </h3>
          <p className="text-sm text-white/70 font-medium">{person.role}</p>
        </div>

        <div className="flex items-center gap-3 pt-2">
          {person.email && (
            <a
              href={`mailto:${person.email}`}
              onClick={(e) => e.stopPropagation()}
              className="p-2 rounded-full bg-white/5 hover:bg-accent/20 border border-white/10
                         hover:border-accent/30 transition-all duration-200 group/btn"
            >
              <IconMail size={16} className="text-white/70 group-hover/btn:text-accent" />
            </a>
          )}
          {person.links?.linkedin && (
            <a
              href={person.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 rounded-full bg-white/5 hover:bg-accent/20 border border-white/10
                         hover:border-accent/30 transition-all duration-200 group/btn"
            >
              <IconBrandLinkedin size={16} className="text-white/70 group-hover/btn:text-accent" />
            </a>
          )}
          {person.links?.github && (
            <a
              href={person.links.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 rounded-full bg-white/5 hover:bg-accent/20 border border-white/10
                         hover:border-accent/30 transition-all duration-200 group/btn"
            >
              <IconBrandGithub size={16} className="text-white/70 group-hover/btn:text-accent" />
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}
