"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Card } from "./card";
import { IconMail, IconBrandLinkedin, IconBrandGithub, IconArrowRight } from "@tabler/icons-react";

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
                 hover:bg-white/8 hover:border-white/30 transition-all duration-500 overflow-hidden
                 hover:scale-105 hover:shadow-2xl hover:shadow-accent/10"
    >
      <div className="p-8 flex flex-col items-center text-center space-y-6">
        {/* Avatar Section */}
        <div className="relative">
          {person.image ? (
            <div
              className="w-24 h-24 rounded-sm overflow-hidden ring-3 ring-white/20
                            group-hover:ring-accent/40 transition-all duration-500 group-hover:scale-110"
            >
              <Image
                src={person.image}
                alt={person.name}
                width={96}
                height={96}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ) : (
            <div
              className="w-24 h-24 rounded-sm bg-gradient-to-br from-accent/30 via-accent/20 to-accent/10
                            ring-3 ring-white/20 group-hover:ring-accent/40 transition-all duration-500
                            flex items-center justify-center group-hover:scale-110 shadow-lg"
            >
              <span className="text-accent font-bold text-3xl tracking-wide">
                {person.name.charAt(0).toUpperCase()}
              </span>
            </div>
          )}
          {/* Status dot */}
          <div
            className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 
                          rounded-sm group-hover:scale-125 transition-transform duration-300
                          border-2 border-white/20 flex items-center justify-center"
          >
            <div className="w-3 h-3 bg-white rounded-sm"></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-3">
          <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300">
            {person.name}
          </h3>
          <p className="text-sm text-white/70 font-medium bg-white/5 rounded-sm px-4 py-2">
            {person.role}
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3 pt-2">
          {person.email && (
            <a
              href={`mailto:${person.email}`}
              onClick={(e) => e.stopPropagation()}
              className="p-3 rounded-sm bg-white/10 hover:bg-accent/20 border border-white/20
                         hover:border-accent/40 transition-all duration-200 group/btn inline-flex items-center justify-center
                         hover:scale-110 hover:shadow-lg"
            >
              <IconMail size={18} className="text-white/70 group-hover/btn:text-accent" />
            </a>
          )}
          {person.links?.linkedin && (
            <a
              href={person.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-3 rounded-sm bg-white/10 hover:bg-accent/20 border border-white/20
                         hover:border-accent/40 transition-all duration-200 group/btn inline-flex items-center justify-center
                         hover:scale-110 hover:shadow-lg"
            >
              <IconBrandLinkedin size={18} className="text-white/70 group-hover/btn:text-accent" />
            </a>
          )}
          {person.links?.github && (
            <a
              href={person.links.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-3 rounded-sm bg-white/10 hover:bg-accent/20 border border-white/20
                         hover:border-accent/40 transition-all duration-200 group/btn inline-flex items-center justify-center
                         hover:scale-110 hover:shadow-lg"
            >
              <IconBrandGithub size={18} className="text-white/70 group-hover/btn:text-accent" />
            </a>
          )}
        </div>

        {/* View Profile CTA */}
        <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          <div className="flex items-center gap-2 text-accent font-medium text-sm">
            <span>Zobrazit profil</span>
            <IconArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
