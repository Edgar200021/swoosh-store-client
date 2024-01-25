import { useForm, Controller, SubmitHandler } from 'react-hook-form'

import { cn } from '../../utils/cn'
import { Input } from '../ui/Input'
import { Button } from '../ui/Button'
import { validateError } from '../../utils/validateError'

import {EditAccountSchema} from "../../schemas/editAccountSchema.ts";
import {useUpdateUserMutation} from "../../store/user/userApi.ts";
import {FileUploader} from "../FileUploader/FileUploader.tsx";
import {useCallback, useState} from "react";
import toast from "react-hot-toast";

import deleteFileIcon from '../../assets/icons/delete-file.svg'
import {useAppDispatch} from "../../store/store.ts";
import {addUser} from "../../store/user/userSlice.ts";

interface Props {
    className?: string
}

export const EditUserProfileForm = ({ className }: Props) => {
    const { control, handleSubmit,reset } = useForm<EditAccountSchema>()
    const [editUser, {isLoading}] = useUpdateUserMutation()
    const [avatar, setAvatar] = useState<File>()
    const dispatch = useAppDispatch()
    const onSubmit: SubmitHandler<EditAccountSchema> = async ({email, name}) => {

        if (!email && !avatar && !name) return


        try {
            const formData = new FormData()

            name && formData.append('name', name)
            email && formData.append('email', email)
            avatar && formData.append('avatar', avatar)

            await editUser(formData).unwrap()
            reset({name: '',  email: ''})
            setAvatar(undefined)
            toast.success('Данные успешно обновлены')
        } catch (e) {
            validateError(e)
        }
    }
    const handleAddAvatar = useCallback((avatar: File) => {
        if (!avatar?.type.startsWith('image')) {
            toast.error('Не поддерживаемый формат файла')
            return
        }
        setAvatar(avatar)
    },[])



    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={cn('max-w-[464px] w-full ', className)}
        >
            <fieldset disabled={isLoading}>
                <div className="flex flex-col items-start gap-y-[5px] mb-4">
          <span className='relative '>
            Email
          </span>
                    <Controller
                        control={control}
                        name="email"
                        render={({ field }) => (
                            <Input
                                type="email"
                                placeholder="Введите email адрес"
                                {...field}
                            />
                        )}
                    />
                </div>
                <div className="flex flex-col items-start gap-y-[5px] mb-4 relative">

                    <span className='relative '>
                Ваше имя
                  </span>
                    <Controller
                        control={control}
                        name="name"
                        render={({ field }) => (
                            <Input
                                placeholder="Как вас зовут"
                                {...field}
                            />
                        )}
                    />

                </div>
                <div className='mb-8'>
                    {avatar ?
                        <div className='border-[1px] border-dashed border-black bg-slate-200 p-4 flex items-center juisty-center gap-x-5'> <img className='w-16 h-16 rounded-full object-cover' src={URL.createObjectURL(avatar)} alt={avatar.name}/> <span>{avatar.name}</span>  <Button onClick={() => setAvatar(undefined)} className='w-6 h-6 ml-auto hover:translate-y-[-6px] active:translate-y-[-3px] transition-transform duration-300 ease' variant='clear'>
                            <img src={deleteFileIcon} alt='delete file'/>
                        </Button></div>
                        : <FileUploader className='max-w-full' accept='image/*' shareFile={handleAddAvatar}/>
                    }

                </div>
                <Button>{isLoading ? 'Загрузка' : 'Сохранить'}</Button>
            </fieldset>
        </form>
    )
}
