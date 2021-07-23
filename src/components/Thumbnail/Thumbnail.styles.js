import styled from "styled-components/macro";

export const Image = styled.img`
    width: 100%;
    max-width: 720px;
    transition: all 0.3s;
    border-radius: 20px;
    object-fit: cover;
    animation: animateThumbnail 0.5s;
    cursor: pointer;

    :hover {
        opacity: 0.8;
    }

    #keyframes animateThumbnail {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;