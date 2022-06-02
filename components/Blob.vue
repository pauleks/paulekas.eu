<template>
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M9.02001 1.9792C7.83706 0.767191 6.65411 -0.444814 4.87968 0.161188C3.75743 0.544458 2.51377 0.767191 1.9223 0.767191C1.33082 0.767191 0.147869 2.5852 0.147869 5.00921C0.147869 6.22121 -0.443607 7.43322 0.739345 8.64523C1.9223 9.85723 3.75743 10.2405 4.87968 9.85723C6.65411 9.25123 7.24558 10.4632 8.42853 9.25123C9.61149 8.03922 9.2374 6.15902 9.61149 5.00921C10.203 3.1912 10.203 3.1912 9.02001 1.9792Z"
            fill="var(--red)" />
    </svg>
</template>

<style scoped>
svg {
    position: absolute;

    margin-left: -150px;
    top: 180px;
    left: 50%;

    z-index: 0;

    width: 300px;
    height: 300px;

    animation: Rotation 30s infinite
}

@keyframes Rotation {
    0% { transform: rotate(0deg) }
    100% { transform: rotate(360deg) }
}
</style>