import {useState} from "react";

const Navbar = () => {
    const pages = [
        ["home", "/home"],
        ["explore", "/explore"],
        ["portfolio", "https://thecodeblog.net"],
        ["contact", "/contact"]
    ]
    const [navOpen, setNavOpen] = useState(false);
    const pathname = window.location.pathname.match(/\/(.*?)(?:\/|$)/) || [];
	const pagename = pathname[pathname.length-1] || "home";

    return <>
        <nav className="absolute top-0 left-0 z-50 flex items-center justify-between w-full px-8 py-6 overflow-hidden">
            <a href="/">
                <svg className="animate__animated animate__fadeInLeftBig" width="144" height="46" viewBox="0 0 144 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.81606 20.3736C9.81606 20.4731 9.78746 20.5442 9.73033 20.5869C9.6732 20.6154 9.60174 20.6082 9.516 20.5656L0.878684 16.6829C0.750089 16.6118 0.685791 16.5122 0.685791 16.3842V14.6562C0.685791 14.514 0.750089 14.4144 0.878684 14.3576L9.516 10.4749C9.57314 10.4464 9.616 10.4322 9.6446 10.4322C9.75893 10.4322 9.81606 10.5104 9.81606 10.6669V12.5229C9.81606 12.6509 9.75176 12.7504 9.62317 12.8216L3.38629 15.4456C3.30056 15.4882 3.30056 15.5309 3.38629 15.5736L9.62317 18.2189C9.75176 18.2758 9.81606 18.3754 9.81606 18.5176V20.3736Z" fill="#F7BC06"/>
                    <path d="M19.7868 21.5039C18.7152 21.5039 17.7721 21.2977 16.9577 20.8852C16.1433 20.4586 15.5146 19.8684 15.0716 19.1146C14.6287 18.3608 14.4072 17.4861 14.4072 16.4906V11.2212C14.4072 10.2257 14.6287 9.35105 15.0716 8.59725C15.5146 7.84345 16.1433 7.26038 16.9577 6.84791C17.7721 6.43547 18.7152 6.22925 19.7868 6.22925C20.8441 6.22925 21.78 6.42836 22.5945 6.82658C23.4089 7.22478 24.0375 7.78658 24.4805 8.51191C24.9234 9.23725 25.1449 10.0764 25.1449 11.0292C25.1449 11.1004 25.1163 11.1644 25.0592 11.2212C25.0163 11.2639 24.9591 11.2852 24.8877 11.2852L22.916 11.3919C22.7445 11.3919 22.6588 11.3137 22.6588 11.1572C22.6588 10.3181 22.3944 9.64258 21.8658 9.13058C21.3514 8.61858 20.6584 8.36258 19.7868 8.36258C18.9152 8.36258 18.2151 8.61858 17.6864 9.13058C17.1577 9.64258 16.8934 10.3181 16.8934 11.1572V16.5972C16.8934 17.4221 17.1577 18.0906 17.6864 18.6026C18.2151 19.1146 18.9152 19.3706 19.7868 19.3706C20.6584 19.3706 21.3514 19.1217 21.8658 18.6239C22.3944 18.1119 22.6588 17.4364 22.6588 16.5972C22.6588 16.4408 22.7445 16.3626 22.916 16.3626L24.8877 16.4479C24.9591 16.4479 25.0163 16.4692 25.0592 16.5119C25.1163 16.5546 25.1449 16.6044 25.1449 16.6612C25.1449 17.6284 24.9234 18.4817 24.4805 19.2212C24.0375 19.9466 23.4089 20.5084 22.5945 20.9066C21.78 21.3048 20.8441 21.5039 19.7868 21.5039ZM35.5697 21.5466C34.498 21.5466 33.5478 21.3332 32.7191 20.9066C31.8904 20.4657 31.2475 19.847 30.7902 19.0506C30.3473 18.2541 30.1258 17.3368 30.1258 16.2986V11.4346C30.1258 10.4106 30.3544 9.50745 30.8116 8.72525C31.2689 7.92878 31.9047 7.31725 32.7191 6.89058C33.5478 6.4497 34.498 6.22925 35.5697 6.22925C36.6556 6.22925 37.6058 6.4497 38.4202 6.89058C39.2489 7.31725 39.8919 7.92878 40.3491 8.72525C40.8064 9.50745 41.035 10.4106 41.035 11.4346V16.2986C41.035 17.3368 40.8064 18.2541 40.3491 19.0506C39.8919 19.847 39.2489 20.4657 38.4202 20.9066C37.6058 21.3332 36.6556 21.5466 35.5697 21.5466ZM35.5697 19.4132C36.4698 19.4132 37.1914 19.1359 37.7344 18.5812C38.2773 18.0266 38.5488 17.2941 38.5488 16.3839V11.4132C38.5488 10.4888 38.2773 9.74925 37.7344 9.19458C37.1914 8.63991 36.4698 8.36258 35.5697 8.36258C34.6838 8.36258 33.9694 8.63991 33.4264 9.19458C32.8834 9.74925 32.612 10.4888 32.612 11.4132V16.3839C32.612 17.2941 32.8834 18.0266 33.4264 18.5812C33.9694 19.1359 34.6838 19.4132 35.5697 19.4132ZM46.738 21.3332C46.6666 21.3332 46.6023 21.3119 46.5451 21.2692C46.5023 21.2124 46.4808 21.1484 46.4808 21.0772V6.65591C46.4808 6.5848 46.5023 6.52791 46.5451 6.48525C46.6023 6.42836 46.6666 6.39991 46.738 6.39991H51.9676C52.9821 6.39991 53.8751 6.57769 54.6466 6.93325C55.4182 7.28878 56.0112 7.80078 56.4255 8.46925C56.8542 9.12345 57.0685 9.89145 57.0685 10.7732V16.9599C57.0685 17.8417 56.8542 18.6168 56.4255 19.2852C56.0112 19.9394 55.4182 20.4444 54.6466 20.7999C53.8751 21.1554 52.9821 21.3332 51.9676 21.3332H46.738ZM48.967 19.0932C48.967 19.1644 49.0027 19.1999 49.0742 19.1999H52.0747C52.832 19.1999 53.4322 18.9652 53.8751 18.4959C54.3323 18.0124 54.5681 17.3724 54.5823 16.5759V11.1786C54.5823 10.3679 54.3538 9.72791 53.8965 9.25858C53.4393 8.77505 52.8249 8.53325 52.0533 8.53325H49.0742C49.0027 8.53325 48.967 8.56878 48.967 8.63991V19.0932ZM72.5679 8.27725C72.5679 8.34838 72.5391 8.41238 72.4822 8.46925C72.4394 8.51191 72.3818 8.53325 72.3108 8.53325H65.0021C64.9307 8.53325 64.895 8.56878 64.895 8.63991V12.6292C64.895 12.7004 64.9307 12.7359 65.0021 12.7359H69.9103C69.9813 12.7359 70.0389 12.7644 70.0818 12.8212C70.1387 12.8639 70.1675 12.9208 70.1675 12.9919V14.6132C70.1675 14.6844 70.1387 14.7484 70.0818 14.8052C70.0389 14.8479 69.9813 14.8692 69.9103 14.8692H65.0021C64.9307 14.8692 64.895 14.9048 64.895 14.9759V19.0932C64.895 19.1644 64.9307 19.1999 65.0021 19.1999H72.3108C72.3818 19.1999 72.4394 19.2284 72.4822 19.2852C72.5391 19.3279 72.5679 19.3848 72.5679 19.4559V21.0772C72.5679 21.1484 72.5391 21.2124 72.4822 21.2692C72.4394 21.3119 72.3818 21.3332 72.3108 21.3332H62.666C62.5945 21.3332 62.5302 21.3119 62.4731 21.2692C62.4302 21.2124 62.4088 21.1484 62.4088 21.0772V6.65591C62.4088 6.5848 62.4302 6.52791 62.4731 6.48525C62.5302 6.42836 62.5945 6.39991 62.666 6.39991H72.3108C72.3818 6.39991 72.4394 6.42836 72.4822 6.48525C72.5391 6.52791 72.5679 6.5848 72.5679 6.65591V8.27725Z" fill="#343434"/>
                    <path d="M80.2703 27.5466C80.1845 27.5892 80.1845 27.6319 80.2703 27.6746C81.7277 28.3572 82.4564 29.5306 82.4564 31.1946C82.4564 32.5457 81.9989 33.5768 81.0847 34.2879C80.1845 34.9848 79.0057 35.3332 77.5483 35.3332H72.1473C72.0757 35.3332 72.0114 35.3119 71.9544 35.2692C71.9116 35.2124 71.8901 35.1484 71.8901 35.0772V20.6559C71.8901 20.5848 71.9116 20.5279 71.9544 20.4852C72.0114 20.4284 72.0757 20.3999 72.1473 20.3999H77.3769C78.9341 20.3999 80.1343 20.7341 80.9775 21.4026C81.8208 22.071 82.2421 23.0808 82.2421 24.4319C82.2421 25.9252 81.585 26.9634 80.2703 27.5466ZM74.4835 22.5332C74.4118 22.5332 74.3763 22.5688 74.3763 22.6399V26.5866C74.3763 26.6577 74.4118 26.6932 74.4835 26.6932H77.3769C78.1344 26.6932 78.7271 26.5154 79.1558 26.1599C79.5985 25.7901 79.8202 25.2852 79.8202 24.6452C79.8202 23.991 79.5985 23.479 79.1558 23.1092C78.7271 22.7252 78.1344 22.5332 77.3769 22.5332H74.4835ZM77.5483 33.1786C78.2911 33.1786 78.8771 32.9794 79.3058 32.5812C79.7485 32.183 79.9702 31.6426 79.9702 30.9599C79.9702 30.263 79.7485 29.7226 79.3058 29.3386C78.8631 28.9404 78.263 28.7412 77.5055 28.7412H74.4835C74.4118 28.7412 74.3763 28.7768 74.3763 28.8479V33.0719C74.3763 33.143 74.4118 33.1786 74.4835 33.1786H77.5483ZM88.1588 35.3332C88.0878 35.3332 88.0235 35.3119 87.9659 35.2692C87.923 35.2124 87.9016 35.1484 87.9016 35.0772V20.6559C87.9016 20.5848 87.923 20.5279 87.9659 20.4852C88.0235 20.4284 88.0878 20.3999 88.1588 20.3999H90.1306C90.2023 20.3999 90.2592 20.4284 90.302 20.4852C90.3596 20.5279 90.3878 20.5848 90.3878 20.6559V33.0932C90.3878 33.1644 90.4239 33.1999 90.4949 33.1999H97.6748C97.7465 33.1999 97.8034 33.2284 97.8463 33.2852C97.9039 33.3279 97.932 33.3848 97.932 33.4559V35.0772C97.932 35.1484 97.9039 35.2124 97.8463 35.2692C97.8034 35.3119 97.7465 35.3332 97.6748 35.3332H88.1588ZM107.779 35.5466C106.707 35.5466 105.757 35.3332 104.928 34.9066C104.1 34.4657 103.457 33.847 102.999 33.0506C102.557 32.2541 102.335 31.3368 102.335 30.2986V25.4346C102.335 24.4106 102.563 23.5074 103.021 22.7252C103.478 21.9288 104.114 21.3172 104.928 20.8906C105.757 20.4497 106.707 20.2292 107.779 20.2292C108.865 20.2292 109.815 20.4497 110.629 20.8906C111.458 21.3172 112.101 21.9288 112.558 22.7252C113.016 23.5074 113.244 24.4106 113.244 25.4346V30.2986C113.244 31.3368 113.016 32.2541 112.558 33.0506C112.101 33.847 111.458 34.4657 110.629 34.9066C109.815 35.3332 108.865 35.5466 107.779 35.5466ZM107.779 33.4132C108.679 33.4132 109.4 33.1359 109.944 32.5812C110.487 32.0266 110.758 31.2941 110.758 30.3839V25.4132C110.758 24.4888 110.487 23.7492 109.944 23.1946C109.4 22.6399 108.679 22.3626 107.779 22.3626C106.893 22.3626 106.179 22.6399 105.636 23.1946C105.093 23.7492 104.821 24.4888 104.821 25.4132V30.3839C104.821 31.2941 105.093 32.0266 105.636 32.5812C106.179 33.1359 106.893 33.4132 107.779 33.4132ZM123.705 35.5039C122.634 35.5039 121.691 35.2977 120.876 34.8852C120.062 34.4586 119.433 33.8612 118.99 33.0932C118.547 32.3252 118.326 31.4434 118.326 30.4479V25.2852C118.326 24.2754 118.547 23.3937 118.99 22.6399C119.433 21.8719 120.062 21.2817 120.876 20.8692C121.691 20.4426 122.634 20.2292 123.705 20.2292C124.763 20.2292 125.691 20.4354 126.492 20.8479C127.306 21.2604 127.935 21.8221 128.378 22.5332C128.82 23.2444 129.042 24.0479 129.042 24.9439V25.1146C129.042 25.1857 129.013 25.2497 128.956 25.3066C128.913 25.3492 128.857 25.3706 128.785 25.3706H126.835C126.763 25.3706 126.699 25.3492 126.642 25.3066C126.599 25.2497 126.577 25.1857 126.577 25.1146V25.0079C126.577 24.2399 126.313 23.607 125.784 23.1092C125.27 22.6114 124.577 22.3626 123.705 22.3626C122.834 22.3626 122.133 22.6257 121.605 23.1519C121.077 23.6639 120.812 24.3466 120.812 25.1999V30.5332C120.812 31.3866 121.091 32.0764 121.648 32.6026C122.205 33.1146 122.926 33.3706 123.813 33.3706C124.67 33.3706 125.342 33.1501 125.827 32.7092C126.327 32.2541 126.577 31.6354 126.577 30.8532V29.5306C126.577 29.4594 126.542 29.4239 126.47 29.4239H123.834C123.762 29.4239 123.698 29.4026 123.641 29.3599C123.598 29.303 123.577 29.239 123.577 29.1679V27.5892C123.577 27.5181 123.598 27.4612 123.641 27.4186C123.698 27.3617 123.762 27.3332 123.834 27.3332H128.785C128.857 27.3332 128.913 27.3617 128.956 27.4186C129.013 27.4612 129.042 27.5181 129.042 27.5892V30.3199C129.042 31.9554 128.556 33.2284 127.585 34.1386C126.628 35.0488 125.334 35.5039 123.705 35.5039Z" fill="#343434"/>
                    <path d="M133.935 34.5654C133.878 34.5938 133.835 34.608 133.806 34.608C133.692 34.608 133.635 34.5298 133.635 34.3734V32.5174C133.635 32.3752 133.699 32.2756 133.828 32.2187L140.064 29.5734C140.15 29.5307 140.15 29.488 140.064 29.4454L133.828 26.8214C133.699 26.7502 133.635 26.6507 133.635 26.5227V24.6667C133.635 24.5672 133.663 24.5032 133.72 24.4747C133.777 24.432 133.849 24.432 133.935 24.4747L142.572 28.3574C142.701 28.4142 142.765 28.5138 142.765 28.656V30.384C142.765 30.512 142.701 30.6116 142.572 30.6827L133.935 34.5654Z" fill="#F7BC06"/>
                    <path d="M80.2649 3.85602L64.8602 39.856" stroke="#F7BC06" stroke-width="2"/>
                </svg>
            </a>
            { pagename === "explore" && <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h2 className="text-3xl font-semibold tracking-wider text-gray-700 uppercase animate__animated animate__fadeInDown"><span className="text-yellow-700">explore</span> posts</h2>
            </div> }
            <button onClick={ () => setNavOpen(!navOpen) } className="relative w-6 h-6 animate__animated animate__fadeInRightBig">
                <div class={`w-6 rounded-full absolute transition-all transform ${navOpen ? "bg-gray-700 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rotate-45" : "top-1.5 left-0 bg-"+(pagename === "home" ? "white" : "gray-700")}`} style={{ height: '3px' }}></div>
                <div class={`w-6 rounded-full absolute transition-all transform ${navOpen ? "bg-gray-700 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 -rotate-45" : "bottom-1.5 left-0 bg-"+(pagename === "home" ? "white" : "gray-700")}`} style={{ height: '3px' }}></div>
            </button>
        </nav>
        <div class={`w-full h-screen bg-white absolute text-gray-700 flex flex-col text-2xl font-medium gap-12 items-center justify-center top-0 left-0 z-40 transform transition-all duration-500 ${navOpen ? "translate-x-0" : "translate-x-full"}`}>
            { pages.map(([e, l], i) => <a href={l} className={`${pagename === e ? "text-yellow-700" : ""} cursor-pointer animate__animated ${navOpen ? "delay-1/2 animate__fadeIn"+(i%2 ? "Left" : "Right") : "animate__fadeOut"+(i%2 ? "Right" : "Left")}`}>{e[0].toUpperCase()+e.slice(1)}</a>) }
        </div>
    </>;
}

export default Navbar;
