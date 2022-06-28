import styled from "styled-components/macro";

export const Wrapper = styled.div`
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    height: 100px;
    padding: 0 20px;
    background: var(--darkGray);
`;

export const Content = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: var(--maxWidth);
    width: 50%;
    height: 3rem;
    background: var(--medGray);
    margin: 0 auto;
    border-radius: 40px;
    color: var(--white);
    @media screen and (max-width: 800px){
        width: 90%;
    }
    img {
        position: absolute;
        left: 15px;
        top: 10px;
        width: 30px;
    }

    input {
        font-size: var(--fontlarge);
        position: absolute;
        left: 0;
        margin: 8px 0;
        padding: 0 0 0 60px;
        border: 0;
        width: 95%;
        background: transparent;
        height: 40px;
        color: var(--white);

        :focus {
            outline: none;
        }
        ::placeholder {
            color: var(--white)
            opacity: 1;
        }
    }
    
`;