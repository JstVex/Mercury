import { useRouter } from "next/router";
import { auth } from "../../firebase";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

export function withAuth(Component: any) {
  return function WithAuth(props: any) {
    const router = useRouter();

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (!user) {
          router.push("/login"); 
        }
      });

      return unsubscribe;
    }, [router]);

    return <Component {...props} />;
  };
}