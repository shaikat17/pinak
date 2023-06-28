import { useEffect } from 'react';

const useTitle = title => {
    useEffect( () => {
        document.title = `${title} - Pinak Idea Lab Private Limited`;
    }, [title])
};

export default useTitle;