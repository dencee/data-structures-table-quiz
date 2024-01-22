export default function useUtility() {

  const capitalizeFirst = (str: string) => {
    if(str.length == 0) return str;
    if(str.length == 1) return str[0].toUpperCase();

    return str[0].toUpperCase() + str.slice(1);
  }

  return { capitalizeFirst };
};