import  {ClassValue, clsx} from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs))
}
// twMerge junta estilos em uma linha só, utilitario que ajuda a identificar classe repetidas
// clsx serve para criação de classes dinâmicas