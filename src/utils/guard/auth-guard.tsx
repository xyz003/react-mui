import { useEffect, useCallback, useState } from 'react';
// routes
import { useRouter } from 'routes/hook';
//
import { useAuthContext } from 'hooks/use-auth-context';

// ----------------------------------------------------------------------

type Props = {
    children: React.ReactNode;
};

export default function AuthGuard({ children }: Props) {
    const router = useRouter();

    const { isLogined } = useAuthContext();

    const [checked, setChecked] = useState(false);

    const check = useCallback(() => {
        if (!isLogined) {
            const searchParams = new URLSearchParams({ returnTo: window.location.pathname }).toString();

            const loginPath = '/auth/login';

            const href = `${loginPath}?${searchParams}`;

            router.replace(href);
        } else {
            setChecked(true);
        }
    }, [isLogined, router]);

    useEffect(() => {
        check();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!checked) {
        return null;
    }

    return <>{children}</>;
}
