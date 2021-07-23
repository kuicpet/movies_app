import styled from "styled-components/macro";

export const Spinner = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 5px solid var(--lightGray);
    border-top: 5px solid var(--medGray);
    animation: spin 0.8s linear infinite;
    margin: 20px auto;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;