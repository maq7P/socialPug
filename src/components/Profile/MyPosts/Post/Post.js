import React from 'react';
import Person from '../../../Person/Person';
import style from './post.module.css';
import IdRandom from "../../../../utilities/IdRandom";//need change this

const Post = ({title, text, like, comments, hashtags, postImg, whoName, whoImg, time}) => (
    <div className={style.post}>
        {title ? <h3>{title}</h3> : ''}
        <span className={style.text}>
            {text}
        </span>
        {postImg ? 
            <div className={style.postImg}>
                <img src={postImg}/>
            </div> : 
        ''}
        <div className={style.hashtags}>
            {hashtags.map(hashtag => (
                <span key={IdRandom(7)}>{hashtag}</span>
            ))}
        </div>

        <div className={style.footer}>
            <div className={style.actions}>
                <div className={style.footerItem}>
                    <button>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.7633 12.5094C21.157 11.9891 21.375 11.3516 21.375 10.6883C21.375 9.63596 20.7867 8.63987 19.8398 8.0844C19.5961 7.94142 19.3185 7.86617 19.0359 7.86643H13.4156L13.5563 4.98596C13.5891 4.28987 13.343 3.62893 12.8648 3.12502C12.6302 2.87665 12.3471 2.67904 12.0331 2.5444C11.7191 2.40975 11.3807 2.34094 11.0391 2.34221C9.82031 2.34221 8.74219 3.16252 8.41875 4.33674L6.40547 11.6258H3.375C2.96016 11.6258 2.625 11.961 2.625 12.3758V20.9071C2.625 21.3219 2.96016 21.6571 3.375 21.6571H17.468C17.6836 21.6571 17.8945 21.6149 18.0891 21.5305C19.2047 21.0547 19.9242 19.9649 19.9242 18.7555C19.9242 18.4602 19.882 18.1696 19.7977 17.8883C20.1914 17.368 20.4094 16.7305 20.4094 16.0672C20.4094 15.7719 20.3672 15.4813 20.2828 15.2C20.6766 14.6797 20.8945 14.0422 20.8945 13.3789C20.8898 13.0836 20.8477 12.7906 20.7633 12.5094V12.5094ZM4.3125 19.9696V13.3133H6.21094V19.9696H4.3125ZM19.2281 11.6961L18.7148 12.1414L19.0406 12.7367C19.148 12.9328 19.2036 13.153 19.2023 13.3766C19.2023 13.7633 19.0336 14.1313 18.743 14.3844L18.2297 14.8297L18.5555 15.425C18.6628 15.6211 18.7185 15.8413 18.7172 16.0649C18.7172 16.4516 18.5484 16.8196 18.2578 17.0727L17.7445 17.518L18.0703 18.1133C18.1776 18.3094 18.2333 18.5296 18.232 18.7531C18.232 19.2781 17.9227 19.7516 17.4445 19.9672H7.71094V13.2383L10.043 4.78909C10.1031 4.57252 10.2322 4.38147 10.4107 4.24486C10.5891 4.10825 10.8073 4.03354 11.032 4.03205C11.2102 4.03205 11.3859 4.08362 11.5266 4.18909C11.7586 4.36252 11.8828 4.62502 11.8687 4.90393L11.6437 9.55393H19.0125C19.4297 9.8094 19.6875 10.2406 19.6875 10.6883C19.6875 11.075 19.5188 11.4406 19.2281 11.6961Z" fill="#8C8C8C"/>
                        </svg>
                    </button>
                    <span>{like}</span>
                </div>
                <div className={style.footerItem}>
                    <button>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.8751 12C10.8751 12.2984 10.9937 12.5845 11.2046 12.7955C11.4156 13.0065 11.7018 13.125 12.0001 13.125C12.2985 13.125 12.5846 13.0065 12.7956 12.7955C13.0066 12.5845 13.1251 12.2984 13.1251 12C13.1251 11.7016 13.0066 11.4155 12.7956 11.2045C12.5846 10.9935 12.2985 10.875 12.0001 10.875C11.7018 10.875 11.4156 10.9935 11.2046 11.2045C10.9937 11.4155 10.8751 11.7016 10.8751 12V12ZM15.5626 12C15.5626 12.2984 15.6812 12.5845 15.8921 12.7955C16.1031 13.0065 16.3893 13.125 16.6876 13.125C16.986 13.125 17.2721 13.0065 17.4831 12.7955C17.6941 12.5845 17.8126 12.2984 17.8126 12C17.8126 11.7016 17.6941 11.4155 17.4831 11.2045C17.2721 10.9935 16.986 10.875 16.6876 10.875C16.3893 10.875 16.1031 10.9935 15.8921 11.2045C15.6812 11.4155 15.5626 11.7016 15.5626 12ZM6.18763 12C6.18763 12.2984 6.30616 12.5845 6.51714 12.7955C6.72812 13.0065 7.01426 13.125 7.31263 13.125C7.611 13.125 7.89715 13.0065 8.10813 12.7955C8.31911 12.5845 8.43763 12.2984 8.43763 12C8.43763 11.7016 8.31911 11.4155 8.10813 11.2045C7.89715 10.9935 7.611 10.875 7.31263 10.875C7.01426 10.875 6.72812 10.9935 6.51714 11.2045C6.30616 11.4155 6.18763 11.7016 6.18763 12V12ZM21.6845 7.93125C21.1548 6.67266 20.3954 5.54297 19.4275 4.57266C18.4663 3.60796 17.3252 2.84114 16.0689 2.31563C14.7798 1.77422 13.4111 1.5 12.0001 1.5H11.9533C10.5329 1.50703 9.15716 1.78828 7.86341 2.34141C6.61785 2.87232 5.48747 3.64049 4.53529 4.60312C3.5767 5.57109 2.82435 6.69609 2.30404 7.95C1.76498 9.24844 1.4931 10.6289 1.50013 12.0492C1.50809 13.6769 1.89316 15.2806 2.62513 16.7344V20.2969C2.62513 20.5828 2.73872 20.857 2.94091 21.0592C3.1431 21.2614 3.41732 21.375 3.70326 21.375H7.2681C8.72192 22.107 10.3256 22.492 11.9533 22.5H12.0025C13.4064 22.5 14.7681 22.2281 16.0501 21.6961C17.3001 21.1768 18.4369 20.419 19.397 19.4648C20.365 18.5062 21.1267 17.3859 21.6587 16.1367C22.2119 14.843 22.4931 13.4672 22.5001 12.0469C22.5072 10.6195 22.2306 9.23437 21.6845 7.93125V7.93125ZM18.1431 18.1969C16.5001 19.8234 14.3204 20.7188 12.0001 20.7188H11.9603C10.547 20.7117 9.1431 20.3602 7.90326 19.6992L7.70638 19.5938H4.40638V16.2938L4.30091 16.0969C3.63998 14.857 3.28841 13.4531 3.28138 12.0398C3.27201 9.70313 4.16498 7.50937 5.80326 5.85703C7.4392 4.20469 9.62591 3.29063 11.9626 3.28125H12.0025C13.1744 3.28125 14.3111 3.50859 15.3822 3.95859C16.4275 4.39687 17.365 5.02734 18.1712 5.83359C18.9751 6.6375 19.6079 7.57734 20.0462 8.62266C20.5009 9.70547 20.7283 10.8539 20.7236 12.0398C20.7095 14.3742 19.7931 16.5609 18.1431 18.1969V18.1969Z" fill="#8C8C8C"/>
                        </svg>
                    </button>
                    <span>{comments}</span>
                </div>
            </div>
            <div className={style.name}>
                <Person 
                    name={whoName}
                    time={time}
                    img={whoImg}
                    direction={true}/> {/* direction для того, чтобы поменять местами img и text */}
            </div>
        </div>
    </div>
);
export default Post;