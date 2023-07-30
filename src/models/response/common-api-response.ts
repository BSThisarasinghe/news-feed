export default interface CommonApiResponse<T> {
    "success": boolean,
    "message": string,
    "data": T
}