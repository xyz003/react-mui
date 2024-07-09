import { useCallback, useEffect } from 'react';
// routes
import { paths } from 'routes/paths';
import { useRouter, useSearchParams } from 'routes/hook';
//
import { useAuthContext } from 'hooks/use-auth-context';

// ----------------------------------------------------------------------

type Props = {
    children: React.ReactNode;
};

export default function GuestGuard({ children }: Props) {
    const router = useRouter();

    const searchParams = useSearchParams();

    const returnTo = searchParams.get('returnTo') || paths.home.root;

    const { isLogined } = useAuthContext();

    const check = useCallback(() => {
        if (isLogined) {
            router.replace(returnTo);
        }
    }, [isLogined, returnTo, router]);

    useEffect(() => {
        check();
    }, [check]);

    return <>{children}</>;
}
