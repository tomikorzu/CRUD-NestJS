"use client";

import { ChildrenProp } from "@/modules/shared/interfaces/common.interface";
import AppProvider from "@/modules/shared/providers/AppProvider.provider";

export default function ClientLayout({ children }: ChildrenProp) {
  return <AppProvider>{children}</AppProvider>;
}
