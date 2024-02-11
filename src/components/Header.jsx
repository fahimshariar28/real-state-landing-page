const Header = () => {
  return (
    <div className="mx-20 pt-5 flex items-center gap-[400px]">
      <div className="flex gap-1 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="34"
          viewBox="0 0 23 34"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.7653 16.1497L22.7654 1.99021e-06L15.9358 5.97063e-07L15.9358 0.393516C15.9694 0.408147 16.0026 0.42299 16.0356 0.438044C17.2193 0.974749 18.0712 1.76682 18.5914 2.81427C19.1205 3.85305 19.385 5.13422 19.385 6.65777L19.385 9.72219L3.18943 9.72219L3.18943 6.56688C3.18943 5.07795 3.44949 3.81843 3.96962 2.7883C4.49871 1.74951 5.35512 0.966094 6.53885 0.438044C6.6333 0.395539 6.73023 0.354717 6.82964 0.315579L6.82964 1.39315e-06L3.8147e-05 1.99021e-06L3.76515e-05 16.1497L6.69536 16.1497L6.69536 16.147L15.8782 16.147L15.8782 16.1497L22.7653 16.1497Z"
            fill="#657C26"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.00429589 17.0644L0.000244141 33.0092L6.83015 33.006L6.83015 32.5097C6.7964 32.4953 6.76296 32.4807 6.72985 32.4658C5.54618 31.9396 4.69435 31.1631 4.17435 30.1363C3.64538 29.1181 3.38099 27.8622 3.38117 26.3688L3.38153 23.3651L19.5771 23.367L19.5767 26.4599C19.5766 27.9193 19.3163 29.1539 18.7961 30.1636C18.2669 31.1817 17.4104 31.9495 16.2266 32.467C16.1323 32.5086 16.0355 32.5485 15.9363 32.5868L15.9363 33.0093L22.7656 33.0093L22.7677 17.0672L0.00429589 17.0644Z"
            fill="#657C26"
          />
        </svg>
        <div className="text-white font-inter text-xs font-extrabold leading-12 tracking-tighter">
          <h1>DREAM</h1>
          <h1>GREEN</h1>
          <h1>ARCHITEX</h1>
        </div>
      </div>
      <div className="flex gap-12 text-white">
        <a href="">Home</a>
        <a href="">Features</a>
        <a href="">Pricing</a>
        <a href="">Blog</a>
      </div>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clipPath="url(#clip0_2001_57)">
            <path
              d="M6.50049 7.5H23.5005C23.8983 7.5 24.2798 7.34196 24.5611 7.06066C24.8425 6.77936 25.0005 6.39782 25.0005 6C25.0005 5.60218 24.8425 5.22064 24.5611 4.93934C24.2798 4.65804 23.8983 4.5 23.5005 4.5H6.50049C6.10266 4.5 5.72113 4.65804 5.43983 4.93934C5.15852 5.22064 5.00049 5.60218 5.00049 6C5.00049 6.39782 5.15852 6.77936 5.43983 7.06066C5.72113 7.34196 6.10266 7.5 6.50049 7.5ZM23.5005 10.5H6.50049C6.10266 10.5 5.72113 10.658 5.43983 10.9393C5.15852 11.2206 5.00049 11.6022 5.00049 12C5.00049 12.3978 5.15852 12.7794 5.43983 13.0607C5.72113 13.342 6.10266 13.5 6.50049 13.5H23.5005C23.8983 13.5 24.2798 13.342 24.5611 13.0607C24.8425 12.7794 25.0005 12.3978 25.0005 12C25.0005 11.6022 24.8425 11.2206 24.5611 10.9393C24.2798 10.658 23.8983 10.5 23.5005 10.5ZM23.5005 16.5H6.50049C6.10266 16.5 5.72113 16.658 5.43983 16.9393C5.15852 17.2206 5.00049 17.6022 5.00049 18C5.00049 18.3978 5.15852 18.7794 5.43983 19.0607C5.72113 19.342 6.10266 19.5 6.50049 19.5H23.5005C23.8983 19.5 24.2798 19.342 24.5611 19.0607C24.8425 18.7794 25.0005 18.3978 25.0005 18C25.0005 17.6022 24.8425 17.2206 24.5611 16.9393C24.2798 16.658 23.8983 16.5 23.5005 16.5Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_2001_57">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(0.000488281)"
              />
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  );
};

export default Header;
