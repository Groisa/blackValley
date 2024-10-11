import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";




interface HookDimensionsProviderProps {
    pageSize: PageSize
}
interface Provider {
    children: React.ReactNode
}

const HookDimensionsContext = createContext({} as HookDimensionsProviderProps)

interface PageSize {
    width: number;
    height: number;
}

export const HookDimensionsProvider: React.FC<Provider> = ({ children }) => {
    const [pageSize, setPageSize] = useState<PageSize>({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        const handlePageSize = () => {
            const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            setPageSize({ width, height });
        }
        window.addEventListener('resize', handlePageSize);
        handlePageSize();
        return () => {
            window.removeEventListener('resize', handlePageSize);
        };
    }, []);

    return (
        <HookDimensionsContext.Provider
            value={{
                pageSize
            }}>
            {
                children
            }
        </HookDimensionsContext.Provider>
    )
}


export const UseHookDimensionsContext = () => {
    const UseHookDimensions = useContext(HookDimensionsContext)
    return UseHookDimensions
}


export default HookDimensionsProvider