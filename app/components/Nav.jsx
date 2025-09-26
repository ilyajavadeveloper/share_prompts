"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
    const isUserLoggedIn = true;

    return (
        <nav className="w-full flex items-center justify-between px-6 py-4 mb-16 shadow bg-white">
            {/* Лого + название слева */}
            <Link href="/" className="flex items-center gap-3">
                <Image
                    src="/assets/images/logo.svg"
                    alt="Logo"
                    width={50}
                    height={50}
                />
                <span className="hidden sm:block text-2xl font-extrabold text-gray-900">
          Share <span className="text-gray-700">Prompts</span>
        </span>
            </Link>

            {/* Кнопки справа */}
            <div className="hidden sm:flex items-center gap-4">
                {isUserLoggedIn ? (
                    <>
                        {/* Кнопка Create */}
                        <Link
                            href="/create-prompt"
                            className="px-5 py-2 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-800 transition"
                        >
                            Create Post
                        </Link>

                        {/* Кнопка Sign Out */}
                        <button
                            type="button"
                            onClick={signOut}
                            className="px-5 py-2 rounded-full border border-black text-black text-sm font-medium hover:bg-black hover:text-white transition"
                        >
                            Sign Out
                        </button>

                        {/* Аватар */}
                        <Link href="/profile">
                            <Image
                                src="/assets/images/logo.svg"
                                alt="Profile"
                                width={37}
                                height={37}
                                className="rounded-full cursor-pointer hover:opacity-80 transition"
                            />
                        </Link>
                    </>
                ) : (
                    <>
                        {/* Кнопка Sign In (если пользователь не залогинен) */}
                        <button
                            type="button"
                            onClick={signIn}
                            className="px-5 py-2 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-800 transition"
                        >
                            Sign In
                        </button>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Nav;
