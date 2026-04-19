// Copyright 2026, Command Line Inc.
// SPDX-License-Identifier: Apache-2.0

import { changeLanguage, supportedLanguages } from "@/app/i18n";
import { useTranslation } from "react-i18next";
import { IconButton } from "./iconbutton";

export const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const currentLang = i18n.language;

    const toggleLanguage = () => {
        // Toggle between available languages
        const currentIndex = supportedLanguages.findIndex((l) => l.code === currentLang);
        const nextIndex = (currentIndex + 1) % supportedLanguages.length;
        const nextLang = supportedLanguages[nextIndex].code;
        changeLanguage(nextLang);
    };

    const currentLangInfo = supportedLanguages.find((l) => l.code === currentLang);
    const langLabel = currentLangInfo?.nativeName ?? currentLang;

    const decl: IconButtonDecl = {
        elemtype: "iconbutton",
        icon: "language",
        title: langLabel + " (" + (currentLangInfo?.name ?? "") + ")",
        click: (e) => {
            e.stopPropagation();
            toggleLanguage();
        },
    };

    return <IconButton decl={decl} />;
};
