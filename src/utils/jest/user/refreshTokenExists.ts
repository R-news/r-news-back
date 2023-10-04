export const refreshTokenExists = (data:string[]) => {
    const regex = /refreshToken=([^;]+)/;
    
    const match = data[0].match(regex);
    
    if (match) {
      return true
    } else {
      return false
    }
}