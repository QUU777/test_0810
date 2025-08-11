// src/components/theme-provider.tsx
import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
// これが原因： "next-themes/dist/types" は環境によって存在しない
// import { type ThemeProviderProps } from "next-themes/dist/types"

// ✅ 正しい書き方（パッケージ直下から）
import type { ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
