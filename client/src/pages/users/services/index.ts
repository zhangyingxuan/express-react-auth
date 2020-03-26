import request from '@/utils/request.tsx';

export function fetch(params: object) {
    return request('user/list')
}