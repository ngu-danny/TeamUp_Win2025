"use client";

import { useRouter, useParams } from "next/navigation";
import { useEffect } from "react";

// NOTE: The following implementation is static and based on a student view.
//       The page would redirect depending on whether the user is a student or instructor,
//        and if teams have been finalized.
export default function Course() {
  const router = useRouter();
  const params = useParams<{ id: string }>();

  // Automatically pushes to goals page
  useEffect(() => {
    router.push(`/course/${params.id}/goals`);
  }, []);

  return <div className="w-auto h-auto m-auto grow shrink"></div>;
}
