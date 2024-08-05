import styled from "styled-components";

export const Container = styled.div`
    z-index: 99;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    width: 100%;
    height: 6%;
    background-color: ${(props) =>
        props.changeBackground ? '#000' : 'transparent'};
    transition: background-color 0.6s ease-in-out ;
    

    img {
        width: 10%;
    }

`
export const Menu = styled.ul`
    display: flex;
    list-style: none;
    gap: 50px;
    margin-right: 30px;

`
export const Li = styled.li`
    font-size: 25px;
    font-weight: 600;
    cursor: pointer;
    position: relative;

    a {
        text-decoration: none;
        color: #ffffff;
    }

    &::after {
        content: '';
        height: 3px;
        width: ${(props) => props.isActive ? '100%' : 0};
        background-color: #189b20;
        position: absolute;
        bottom: 0px;
        left: 50%;
        transform: translateX(-50%);
        transition: width 0.5s ease-in-out;
    }

    &:hover::after {
        width: 100%;
    }
`
