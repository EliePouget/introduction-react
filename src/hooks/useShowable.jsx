import { useState, useEffect } from "react";

function useShowable(shown, baseClassName = ""){
    const [isShown, setIsShown] = useState(shown);

    return {
        isShown: isShown,
        toggleShown: () => setIsShown(!isShown),
        setIsShown: setIsShown,
        className: baseClassName + shown ? 'foldable shown' : 'foldable'
    } ;
}

export default useShowable;
