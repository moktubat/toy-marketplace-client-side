import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} |  Official LEGOVILLA® Shoping Store`;
    }, [title])
};

export default useTitle;