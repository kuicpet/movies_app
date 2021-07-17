import React, { useState, useEffect, useRef } from "react";

// Image
import SearchIcon from "../../images/search.svg";

//styles
import { Wrapper, Content } from "./SearchBar.styles";

const SearchBar = ({ setSearchItem }) => {
    const [state, setState] = useState("");
    const initial = useRef(true);
    

    useEffect(() => {
        if(initial.current){
            initial.current = false;
            return;
        }
        const timer = setTimeout(() => {
            setSearchItem(state)
        }, 500);

        return () => clearTimeout(timer);
    },[setSearchItem, state])

    return (
        <Wrapper>
            <Content>
                <img src={SearchIcon} alt="Search" />
                <input 
                    type="text"
                    placeholder="Search movie"
                    onChange={e => setState(e.currentTarget.value)}
                    value={state}
                />
            </Content>
        </Wrapper>
    );
};

export default SearchBar;