import React from 'react'

const usePageMeta = (title, description) =>{
    const defaultTitle = "FindHero";
    const defaultDesc = "Проект Помоги найти героя";

    React.useEffect(() => {
        document.title = title || defaultTitle;
        document.querySelector("meta[name='description']").setAttribute("content", description || defaultDesc);
    }, [defaultTitle, title, defaultDesc, description]);
};


export default usePageMeta