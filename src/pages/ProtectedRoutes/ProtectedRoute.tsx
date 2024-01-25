import {Navigate} from "react-router-dom";
import {getUser} from "../../store/user/userSlice.ts";
import {ReactNode, useLayoutEffect} from "react";
import {useAppSelector} from "../../store/store.ts";
import {UserRoles} from "../../store/user/enums.ts";
import toast from "react-hot-toast";



interface Props {
    role: UserRoles[]
    children: ReactNode
}
export const ProtectedRoute = ({role, children}: Props) => {
    const user = useAppSelector(getUser)



    useLayoutEffect(() => {
        if (!user) {
            toast.error('Для дальнейших действий войдите в аккаунт')
            return
        }
        if (user && !user.role.some(val => role.includes(val))) {
            toast.error('У вас нет доступа к этому маршруту')
        }

    }, [user]);

    if (!user) return <Navigate to='/auth/sign-in'/>
    if (!user.role.some(val => role.includes(val))) return <Navigate to='/'/>
    return  children
};
