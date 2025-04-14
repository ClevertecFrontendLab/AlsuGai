import { createIcon } from '@chakra-ui/icons';
import React, { SVGProps } from 'react';

export const Filter = createIcon({
    displayName: 'Filter',
    viewBox: '0 0 24 24',
    path: (
        <path
            d='M9 15.75C9 15.5511 9.07902 15.3603 9.21967 15.2197C9.36032 15.079 9.55109 15 9.75 15H14.25C14.4489 15 14.6397 15.079 14.7803 15.2197C14.921 15.3603 15 15.5511 15 15.75C15 15.9489 14.921 16.1397 14.7803 16.2803C14.6397 16.421 14.4489 16.5 14.25 16.5H9.75C9.55109 16.5 9.36032 16.421 9.21967 16.2803C9.07902 16.1397 9 15.9489 9 15.75ZM6 11.25C6 11.0511 6.07902 10.8603 6.21967 10.7197C6.36032 10.579 6.55109 10.5 6.75 10.5H17.25C17.4489 10.5 17.6397 10.579 17.7803 10.7197C17.921 10.8603 18 11.0511 18 11.25C18 11.4489 17.921 11.6397 17.7803 11.7803C17.6397 11.921 17.4489 12 17.25 12H6.75C6.55109 12 6.36032 11.921 6.21967 11.7803C6.07902 11.6397 6 11.4489 6 11.25ZM3 6.75C3 6.55109 3.07902 6.36032 3.21967 6.21967C3.36032 6.07902 3.55109 6 3.75 6H20.25C20.4489 6 20.6397 6.07902 20.7803 6.21967C20.921 6.36032 21 6.55109 21 6.75C21 6.94891 20.921 7.13968 20.7803 7.28033C20.6397 7.42098 20.4489 7.5 20.25 7.5H3.75C3.55109 7.5 3.36032 7.42098 3.21967 7.28033C3.07902 7.13968 3 6.94891 3 6.75Z'
            fill='black'
        />
    ),
});

export const BookmarkHeart = () => (
    <svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
            d='M5.99985 3.30749C7.0401 2.23874 9.64035 4.10999 5.99985 6.51524C2.35935 4.10999 4.9596 2.23949 5.99985 3.30899V3.30749Z'
            fill='black'
        />
        <path
            d='M1.5 1.5C1.5 1.10218 1.65804 0.720644 1.93934 0.43934C2.22064 0.158035 2.60218 0 3 0L9 0C9.39782 0 9.77936 0.158035 10.0607 0.43934C10.342 0.720644 10.5 1.10218 10.5 1.5V11.625C10.5 11.6928 10.4815 11.7594 10.4467 11.8176C10.4118 11.8758 10.3618 11.9234 10.302 11.9554C10.2422 11.9874 10.1748 12.0026 10.1071 11.9994C10.0393 11.9961 9.97372 11.9746 9.91725 11.937L6 9.82575L2.08275 11.937C2.02628 11.9746 1.96067 11.9961 1.89292 11.9994C1.82516 12.0026 1.7578 11.9874 1.698 11.9554C1.6382 11.9234 1.5882 11.8758 1.55334 11.8176C1.51847 11.7594 1.50004 11.6928 1.5 11.625V1.5ZM3 0.75C2.80109 0.75 2.61032 0.829018 2.46967 0.96967C2.32902 1.11032 2.25 1.30109 2.25 1.5V10.9245L5.79225 9.063C5.8538 9.02204 5.92607 9.00019 6 9.00019C6.07393 9.00019 6.1462 9.02204 6.20775 9.063L9.75 10.9245V1.5C9.75 1.30109 9.67098 1.11032 9.53033 0.96967C9.38968 0.829018 9.19891 0.75 9 0.75H3Z'
            fill='black'
        />
    </svg>
);

export const EmojiHeartEyes = () => (
    <svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
            d='M6 11.25C4.60761 11.25 3.27226 10.6969 2.28769 9.71231C1.30312 8.72774 0.75 7.39239 0.75 6C0.75 4.60761 1.30312 3.27226 2.28769 2.28769C3.27226 1.30312 4.60761 0.75 6 0.75C7.39239 0.75 8.72774 1.30312 9.71231 2.28769C10.6969 3.27226 11.25 4.60761 11.25 6C11.25 7.39239 10.6969 8.72774 9.71231 9.71231C8.72774 10.6969 7.39239 11.25 6 11.25ZM6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12Z'
            fill='black'
        />
        <path
            d='M8.48629 7.51048C8.55748 7.49371 8.63202 7.49814 8.70074 7.5232C8.76945 7.54827 8.82933 7.59288 8.87301 7.65154C8.91669 7.71021 8.94226 7.78037 8.94657 7.85338C8.95089 7.92639 8.93375 7.99908 8.89729 8.06248C8.60113 8.57574 8.175 9.00194 7.66178 9.29818C7.14856 9.59442 6.56636 9.75025 5.97379 9.74998C5.38121 9.75025 4.79901 9.59442 4.28579 9.29818C3.77258 9.00194 3.34644 8.57574 3.05029 8.06248C3.01382 7.99908 2.99668 7.92639 3.001 7.85338C3.00531 7.78037 3.03088 7.71021 3.07456 7.65154C3.11824 7.59288 3.17812 7.54827 3.24684 7.5232C3.31555 7.49814 3.39009 7.49371 3.46129 7.51048H3.46504L3.47779 7.51423L3.52804 7.52548L3.71704 7.56673C3.87829 7.60123 4.10329 7.64773 4.35979 7.69348C4.87954 7.78648 5.50129 7.87498 5.97379 7.87498C6.44629 7.87498 7.06879 7.78648 7.58779 7.69348C7.8662 7.64338 8.14351 7.58737 8.41954 7.52548L8.46979 7.51423L8.48254 7.51123L8.48629 7.50973V7.51048ZM3.56704 3.42448C4.13929 2.35648 6.58204 3.33448 4.28104 5.99998C0.909036 4.80298 2.51854 2.77648 3.56704 3.42448ZM8.43304 3.42448C9.48154 2.77648 11.091 4.80298 7.71904 5.99998C5.41879 3.33448 7.86154 2.35648 8.43304 3.42448Z'
            fill='black'
        />
    </svg>
);

export const People = () => (
    <svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
            d='M5.25 10.5C5.25 10.5 4.5 10.5 4.5 9.75C4.5 9 5.25 6.75 8.25 6.75C11.25 6.75 12 9 12 9.75C12 10.5 11.25 10.5 11.25 10.5H5.25ZM8.25 6C8.84674 6 9.41903 5.76295 9.84099 5.34099C10.2629 4.91903 10.5 4.34674 10.5 3.75C10.5 3.15326 10.2629 2.58097 9.84099 2.15901C9.41903 1.73705 8.84674 1.5 8.25 1.5C7.65326 1.5 7.08097 1.73705 6.65901 2.15901C6.23705 2.58097 6 3.15326 6 3.75C6 4.34674 6.23705 4.91903 6.65901 5.34099C7.08097 5.76295 7.65326 6 8.25 6Z'
            fill='black'
        />
        <path
            d='M3.912 10.5C3.80082 10.2659 3.74537 10.0092 3.75 9.75002C3.75 8.73377 4.26 7.68752 5.202 6.96002C4.73182 6.81514 4.24196 6.7443 3.75 6.75002C0.75 6.75002 0 9.00002 0 9.75002C0 10.5 0.75 10.5 0.75 10.5H3.912Z'
            fill='black'
        />
        <path
            d='M3.375 6C3.87228 6 4.34919 5.80246 4.70083 5.45083C5.05246 5.09919 5.25 4.62228 5.25 4.125C5.25 3.62772 5.05246 3.15081 4.70083 2.79917C4.34919 2.44754 3.87228 2.25 3.375 2.25C2.87772 2.25 2.40081 2.44754 2.04917 2.79917C1.69754 3.15081 1.5 3.62772 1.5 4.125C1.5 4.62228 1.69754 5.09919 2.04917 5.45083C2.40081 5.80246 2.87772 6 3.375 6Z'
            fill='black'
        />
    </svg>
);

export const Desserts = createIcon({
    displayName: 'DessertsIcon',
    viewBox: '0 0 24 24',
    path: (
        <>
            <rect width='24' height='24' fill='url(#pattern0_5011_19620)' />
            <defs>
                <pattern
                    id='pattern0_5011_19620'
                    patternContentUnits='objectBoundingBox'
                    width='1'
                    height='1'
                >
                    <use
                        xlinkHref='#image0_5011_19620'
                        transform='translate(0.125 0.125) scale(0.0078125)'
                    />
                </pattern>
                <image
                    id='image0_5011_19620'
                    width='96'
                    height='96'
                    preserveAspectRatio='none'
                    xlinkHref='data:image/png;base64,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'
                />
            </defs>
        </>
    ),
});

export const Drinks = createIcon({
    displayName: 'DrinksIcon',
    viewBox: '0 0 24 24',
    path: (
        <>
            <rect width='24' height='24' fill='url(#pattern0_5011_9753)' />
            <defs>
                <pattern
                    id='pattern0_5011_9753'
                    patternContentUnits='objectBoundingBox'
                    width='1'
                    height='1'
                >
                    <use
                        xlinkHref='#image0_5011_9753'
                        transform='translate(0.125 0.144216) scale(0.0078125)'
                    />
                </pattern>
                <image
                    id='image0_5011_9753'
                    width='96'
                    height='96'
                    preserveAspectRatio='none'
                    xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFDklEQVR4nO2deaxdQxjAf31P2yh9/lLkUVpRvCKWILZHqyFiaawJ6V+iiOQJaSyNiJZWiIQIsYTSVPjDUmKPPcQSRaoillIkVKsLSlXx3sgk85Kmud+c23vPnZkz5/sl33/nnG+ZuXNmvvnmXFAURVEURVEURVEURVEURVGK2QmYDXwI/A6YmshvzudrgZ5YHWUqsDqBYJjIsgo4IXTwjwc2J+C8SURsLPpDBX8HYGUCTpvE5EdgTIgGuDwBZ02iMhCiAV5LwFGTqLwaogG+F5SfQn04VYiBjU3HWSUo35X6sIsQg19CKF8uKJ9EfdhXiME3IZQvEZQfTn04QojBJzFfwtOoDycJMXgzhPKnBOXnUB/OFWLwbAjlDwnKL6Q+zBRisCCE8tsF5bOoD1cJMbg5hPLZgvI7qA93CjGwWYKOM0NQ/iT14emY78HjBOV2eloXPhZi8B7wHfAX8AfwBfAIcDYwsizlewrK7d5AXVjTQp7oK+D0MpRvB/zXQMEQsD35M6aF4G8Zo/nAiHaN+EFQsB/509dGAwzLvHaNeKvGi7HzSmiAoXaHo7uFB88lf+aV0ADD74SWX8yXCA9dTP484wmqnQlOdoEdC5wBfO65/qxWjTg6Zjo2MisE3+3EZP8G1/d4GmFRq0b0uHFs6wcOAjuSL2MFv60s9Nw3XbjHrhNK7wm2XihXpnmGk8MKOmyjeza0Y8zjwkNvIF/mCj5/VHCf1ACb2jFmIGZlQCRebzEJN1m476d2jDlYeOifZeY9EsL6tFHw2S7OfFzZic7aBfwqPPhI8uMowdefC1IL3cBnnVoRPy88eA75cZPg62Mt9v5SChlmxawOCMyngq8Xee6ZAvzdyRhNEh5u58p7kA97eXrxRE8Fue/MxGllGfeloOAy8mFA8HGZcP2lBeX7dketNG6LWSMTiLebXPP0et6Lw7IOGF+mcf2eYWgCeQw/Q4KPB2yxSXNNE8e07MLr2LIN7HaHExopvJ7qM8eTTrYr3KvdVNQUyD/tZD+LuEVQuryM7beIWNu/FXxb4VkHNRp2psbapqtyzejJTQbYJ3b6uk/MqukXqC4vtxH4f93IMDqUsRd7Xsa2nr5q9HlevkXyEnBQaIPtTGCtYND9VI8HWwj8O8CJMY2eLxi2uWJT0olu1tJs4J9z27TR6fUY/jDVYWGTgV/iTsskxQOeTeuivHkK9AmVf1vLiyFfsNvCeE8G8I3E1wUjXAqlKPiD7teeLHd5jL+AdJnR5NBjF2BJs5vb8W9k/MqYn3gp+PROMykF43I+lT3GY9wvJDXu2YZZj52iJs8oz15B28WpJTPds+ha5g7fbXIzvEXuizGVYIrHsbXA7rENdDt36wQbbcAPddeNdpnfyiFVUhvg3ciHOqzu9z323UgG2J/r1x4nF0fqWd0Flc5L3TCaBQe6gi3J2UcDF3ONdOUkkj0bYyTTOs2ZbWQXTWA5n0y5NYHgmgKxNmbLzp76SpOA2PO948iUUZ7qYpOQfBDq64ehuTeB4Jom5T4y45AmU7wmERlMMc/fqc3tJyKldnudbsmuV8iECa5HScHvimhbl+eolZ0y700GXCc4uMF9/jE24zyp8xwq+8SZzwLS30bNosC4yp+4X0MGSF/aNRWQ1Tl/3stUQGy2tPIc45kFmYRl0NmeBVdUKBNqnK32dGNW9LtK6fUJBNgIst7ZGOzvSBRFURRFURRFURRFURRqw/8WXTgttYNCMgAAAABJRU5ErkJggg=='
                />
            </defs>
        </>
    ),
});

export const FirstCourses = createIcon({
    displayName: 'FirstCoursesIcon',
    viewBox: '0 0 24 24',
    path: (
        <>
            <rect width='24' height='24' fill='url(#pattern0_5011_19509)' />
            <defs>
                <pattern
                    id='pattern0_5011_19509'
                    patternContentUnits='objectBoundingBox'
                    width='1'
                    height='1'
                >
                    <use
                        xlinkHref='#image0_5011_19509'
                        transform='translate(0.166667 0.166667) scale(0.00694444)'
                    />
                </pattern>
                <image
                    id='image0_5011_19509'
                    width='96'
                    height='96'
                    preserveAspectRatio='none'
                    xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADhUlEQVR4nO2cy28OYRSHn6pbaZWN0A1BLQRhI00TBFvWjcsf4bqhexa0LhUkiK6UhWuEsiHp30AICbuicWtokPaVN86Kznzz9evMO9/M70lO0vQyc875zZz3zPtNDwghhBBCCCGEEFUwo5pfFtNHE9AHfDE7Z98TGXEacP9Yj7KfHcOTCPBeAmSHizAhAcqB0x0gAUqN0x2QLouBDmAP0A30Av3AfWAoRoAh+51++5tuO0aHHVNMwmpgnyXsGfA1JsG1mj/2U3tm8OdsL6MiC4Au4DLwLsVkJ7W35ov3qYWCMhfYDdwGxnKQdBdh3rdbJsYcCsBy4ATwMQfJdVXaB+A4sIw6xDt9Cfidg0S6Gm0cuFkv68VC25n8VUPAE8Ab4I4tzAetk9kMrAVWAEuARcAsYLZ93WY/WwdsAfYCh+0Yd+2YEzX45WM6YzHmkq6ITbJK9tkStB/YBMxP0cdma0kPAPfs3NX6O2yx5oYW67ur7TxOAZ1AY0DfG82Hnil0ZNfy0DX52/11FbfwDSsPDeSPBmCr+Zi0hL62shiEHfZpVCUnf1gd9jW6XmizD32StMy+jG3P2sFdwM8Ei+kVYCn1SxtwNcHi7XOxMyuntiW4Ml5ZbS0KnRZTXMxjVsJSf7AaqeDIY6CV4tEKPKkQ+4jlqCbmAecT1ncZiVvtvqRvblxUYknrwvK5rfiik+9adGWTSg6+V3qZTAIQVgCVIFIV4EKSNaDJNtSmsk8iY9IcfALO6vVJIYQQtRK10JYNFyoPEuAvEiAwEqCoAkx1N7RsuLzthpYNl7fd0LLh8rYbWjZcGgJ4VILSEyDV3dCy4ULthkqAwHmQAH+RAIGRAIGRAIGRAIGRAIGRAIGRAIGRAIGRAIGRAIGRAIGRAIGRAIGRAIGRAIGRAIGRAGUV4FvEif0kkjKNXXMRM+lS52XEyddTHjZE5OBFFieP+m/xo5SH7ogcDGZx8iMxg4zKUIZabFL7ZDk4lIUD7TEL0PWczgKaLnxsAzHxryQjBiuI0FzQK38gJu6HWS9C4zHO+HJ0DNhY52I0WwzdMWXHWS4yb0J6q3w9r8h2kkAD7x7kIHgX2Px8pJkEHGIUtx4U3R7ZQ1lQZtrYx7g1oWg2bmUn5MjN/1hjI35dwe2JNSG5ZZWNDPal6TkwmoOkuSnaqMUwaA9ZmfX5QgghhBBCCCGEEILC8QcO4lKLjoWFSAAAAABJRU5ErkJggg=='
                />
            </defs>
        </>
    ),
});

export const Preparations = createIcon({
    displayName: 'PreparationsIcon',
    viewBox: '0 0 24 24',
    path: (
        <>
            <rect width='24' height='24' fill='url(#pattern0_5011_8999)' />
            <defs>
                <pattern
                    id='pattern0_5011_8999'
                    patternContentUnits='objectBoundingBox'
                    width='1'
                    height='1'
                >
                    <use
                        xlinkHref='#image0_5011_8999'
                        transform='translate(0.151406 0.146862) scale(0.0078125)'
                    />
                </pattern>
                <image
                    id='image0_5011_8999'
                    width='96'
                    height='96'
                    preserveAspectRatio='none'
                    xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEm0lEQVR4nO2cS4gdRRSGvzwnOJNkBockRN1kkcdiVmpQhGRW4gPcRd2okyBmNyaaoGSRZBEUNCsVQRARXxsziSJIIC7cRDcSSMjDR2QU4wMlD40ZhVFLCipwGW7V7b79Oqe6Pjibvl19//+cvt11q6saEolEIpFIJBKJRKIcbgEOAmeBGcAojRngDPAicLOWk2Mb8JeA5JkKijGBcCYEJMpUHI8jlJuUX25Mjl+CvcSK46CA5Jia4gUEclZAYkxNcRqB+C4/twbaGE/0oq52t3n2v4ZA+kmKEV6AIt9VO6kADZMK0DCpAA2TCtAwam5WsfpSIzRWX2qExupLjdBYfakRGquvPz1C7d95rdzu8WS9iuN04GyJLU4hkOcFJMbUFAcQyCrgioDkmIrjd2A1QnkY+FdAkkxFYb09iGAWAl8JSJSpKL50HsWyR0CSTMXxLEJZClwOCD8EbAYGkcug03g44OMSMIRAngiI3ok+ntY2NWXKI9Zu18oRj6f3Eci0R+wm9LLZ4+lbBHLNI1bk9TIjQ7HPitCAGl9qhMbqS43QWH1JEboIGANWdvnMblsHzFPoS4XQTcCPHeM2rwDzgWWu63hd00lgjSJfKoQuAX7t8v1vAJ932X5cia/MNC30zoAGXwwr8JWZpoWuzZl825cfUOArMxKETuUogH2Cp8WXGqGLgaMZkv8usECRLxFCh4Gt7qZ6zMXbwI6OHs0K4IcMBfgkx4OV1hdgHrCrx/Pm/4CPgC9yXIKeSwXozcI5/fcy4zuy0epfwEsVJd/GNw36qoSyhU6UlGj7h+vNLtufachXZZQpdEVJc4wOub6+HR/aB3ztltPudkMUdfuqlDKFvhY4nh1WuA/YCEwC3wf2fU+Yr0opS+g64J/Ao8Dlc/YfcV3SbvvPAqNCfFVOWUJfDRzrbk+b0Y5R0LnxiBBflVOG0JHANPePe7Td72ln32FRhFYVYEfgOHaufogHPO3eoRitKsCJwNBBLyY9bd+iGK0pwFjgGPdkuHFf8LTd37Cv2igq9ICn/XSgzz7o+ve+OUllTAxrTQHOedrv9STe3i9+Cnyvccec37Cv2igidEOg/fqO/Va7S8pvPRJ/fYT03oZ91UoRoZOetufdtPct7mnXbIbEh345dfuqlSJCP/S0teNBf+dIunH7lzl9vBUF+DlnkkPLR+8Q5KtW+hV6YwmJ/wXYnuM5bx2+aqdfoesLLpp7ErhBoK/a6VfoypxJ/wN4HbiLeoi+APRYFGfcKzFtL+ihBhb5taIAQ27QbLYj4XaGw8vA/Q2vrGxFATonVo1UdDPtl1YVQCJqfKkRGqsvNUJj9aVGaKy+1AiN1dfVCBdqLwu8tEkcvvcE2eX+WhkPDIGIw/dv1m7XygeBKY/ieCxwvbSvftHG7oCfopO9KmHYvczIJ/qI+0lLf2HTeODMt3Gxy/RIFWdNLLETwQx4FkXHEsfdeJVoVgVe3qQ5pj3vnxCJna38qYCkmZLiM3diqWKx6/1cFJBA02dY7U9puOyEsD2GR90TrXOBf8xGQFx1S5imXFdTbG8nkUgkEolEIpFIoJb/AVxf/H3EuTZKAAAAAElFTkSuQmCC'
                />
            </defs>
        </>
    ),
});

export const Grils = createIcon({
    displayName: 'GrilsIcon',
    viewBox: '0 0 24 24',
    path: (
        <>
            <rect width='24' height='24' fill='url(#pattern0_5011_19676)' />
            <defs>
                <pattern
                    id='pattern0_5011_19676'
                    patternContentUnits='objectBoundingBox'
                    width='1'
                    height='1'
                >
                    <use
                        xlinkHref='#image0_5011_19676'
                        transform='translate(0.125 0.125) scale(0.0078125)'
                    />
                </pattern>
                <image
                    id='image0_5011_19676'
                    width='96'
                    height='96'
                    preserveAspectRatio='none'
                    xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADzUlEQVR4nO2dTU8UQRCGX5RgDIv6A+QkiB+JICc9+pdQSFTurJEInNSLNwUMiQejgtz8DcaPs65iokaEhHjQNpPUJmQy3Tuw3ds1Pe+T1AWKUFVvb3XP7HQPQAghhBBCCCGEED+cBTADYBPAewC7AExFbFdizmKfBjBapUFxEcBzBUU0ni0TYxKK6QewBOCvgmKZQJbltiC5quKUjBBTE9sAcBJKOArgpYKimB7bay2fhCUFxTCR7F7s4k926PlfAdwEMA5gENVhUGK+BWDLkV+W+0TMQF19/0nFim6jAWDZkec6Iq7zbUE9BtCHdOjrIMJIjKBmHG0nGzWp0XC0oxua2k/W81PltmNZ2nM+WoK5hHQZt+T8IUYwvy3B2NrPAIA7AL4AaAFoys8O6+eDYQBrkktmzwCMOfyHLDlnf9tzbBOSjWaBb7MLPx/F/1Hwv37K73zlHYyDBtIq8G114dcta44cnjr+jgIEbqGZbacoQFFrmevCL6QAv1IUYECK2yoxCTdL+HXLM0cOqykKoI0xmXDz8X8HcLoKeasJpAuGZcLdFlvtUHxVeasJpK55qwmkrnmrCaSueasJpK55H2YZ2r7HY5Raq8Syt7ICFF1gGaXWTFEAzSPfFHyp5CvvYBw0EFMxs0EBQAEONRJij2jDT4CS3pmj9i0oNhQgMhQgMhQgxzEAd+W+fLZT5T6A4wH9KECOhwVFeRDQjwLs4yqAfyWeu/HpRwH28abkl+Q+/SiAcL7kRgjffhRAmLIU41Nu0vTtRwE6PKmWvzXs248CCG8txbjWdgjkRwGEogdlMzvTdgjkRwGEP5Zi5PeZ+fajAB0Klt9v4NuPAnRoGfkNcL79KIDASfiA+B45a1yGxhVgquSFEy/EAglwzuGzGNCPc0CJm2c7uZ33Pv0owD6uWG4f7wE4EsiPApT4AuVRQD8KUPAV4qK0iT0pViOgHwWw0FfyxJVu/ShAZChAZChAZGovgFFqvgQLhq/AjVLzlXcwKACqJUDRMTRGqX32mHcwUt6kN+cxb1VHlrVPQTEV3aY6pOnIsjoe2jdhyTl714CaYyuz435TZVbTsZXTlmC2Ej24dQjAN0vO12MENOropcsJHl284sg3/7BXz9joIEIjkZG/4sjzVexJyXV8/ZYc93u5YmI0JOZZR9sxknv0RceCguWjiWTzUPIKkxcKimHq+goTyAttXPNBarYO4ASU0S9bf1J/jdW8fOrVckGOgjSJ2Wbs98UclBF5s0TWmt7JUwmmIrYjMW/IRVa0dT4hhBBCCCGEEIKk+A84sduiCdYsdwAAAABJRU5ErkJggg=='
                />
            </defs>
        </>
    ),
});

export const KidsCourses = createIcon({
    displayName: 'KidsCoursesIcon',
    viewBox: '0 0 24 24',
    path: (
        <>
            <rect width='24' height='24' fill='url(#pattern0_5011_9574)' />
            <defs>
                <pattern
                    id='pattern0_5011_9574'
                    patternContentUnits='objectBoundingBox'
                    width='1'
                    height='1'
                >
                    <use
                        xlinkHref='#image0_5011_9574'
                        transform='translate(0.125 0.125) scale(0.0078125)'
                    />
                </pattern>
                <image
                    id='image0_5011_9574'
                    width='96'
                    height='96'
                    preserveAspectRatio='none'
                    xlinkHref='data:image/png;base64,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'
                />
            </defs>
        </>
    ),
});

export const National = createIcon({
    displayName: 'NationalIcon',
    viewBox: '0 0 24 24',
    path: (
        <>
            <rect width='24' height='24' fill='url(#pattern0_5011_9690)' />
            <defs>
                <pattern
                    id='pattern0_5011_9690'
                    patternContentUnits='objectBoundingBox'
                    width='1'
                    height='1'
                >
                    <use
                        xlinkHref='#image0_5011_9690'
                        transform='translate(0.166667 0.166667) scale(0.00694444)'
                    />
                </pattern>
                <image
                    id='image0_5011_9690'
                    width='96'
                    height='96'
                    preserveAspectRatio='none'
                    xlinkHref='data:image/png;base64,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'
                />
            </defs>
        </>
    ),
});

export const Salads = createIcon({
    displayName: 'SaladsIcon',
    viewBox: '0 0 24 24',
    path: (
        <>
            <rect width='24' height='24' fill='url(#pattern0_5011_19416)' />
            <defs>
                <pattern
                    id='pattern0_5011_19416'
                    patternContentUnits='objectBoundingBox'
                    width='1'
                    height='1'
                >
                    <use
                        xlinkHref='#image0_5011_19416'
                        transform='translate(0.161085 0.153364) scale(0.00751704)'
                    />
                </pattern>
                <image
                    id='image0_5011_19416'
                    width='96'
                    height='96'
                    preserveAspectRatio='none'
                    xlinkHref='data:image/png;base64,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'
                />
            </defs>
        </>
    ),
});

export const Sauces = createIcon({
    displayName: 'SaucesIcon',
    viewBox: '0 0 24 24',
    path: (
        <>
            <rect width='24' height='24' fill='url(#pattern0_5011_9746)' />
            <defs>
                <pattern
                    id='pattern0_5011_9746'
                    patternContentUnits='objectBoundingBox'
                    width='1'
                    height='1'
                >
                    <use
                        xlinkHref='#image0_5011_9746'
                        transform='translate(0.166667 0.208333) scale(0.00694444)'
                    />
                </pattern>
                <image
                    id='image0_5011_9746'
                    width='96'
                    height='96'
                    preserveAspectRatio='none'
                    xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFcElEQVR4nO2dW2icRRTH/+sladSisdGYphZbq74UilXUB8UqiiholUYtEqzQgu274IsahVZ88EXbgoo3FG3VJykqPnmnlVgvoV5aaxJp64Maq9KaptpdOXA+2Cw5M/N930x2d+b84Dxk2bnknPnOnDnfzCygKIqiKIqiKEqTuAbACwC+BPATgK8APA1gabM6lApnAXgTQE2QKhvi1GZ3NEZOA/CZQfn18i6AOc3ucGy85Kj8TN5TI/jjjpzKVyN4hPz5aEEDkLyvT0I57jQo9zUAC9jn65wQCCnq+RHA6fydTgDvqBHCcFBQLD0Z9agRAjCHY/tG5f9bN/rrUSN4plsY/X8ayqgRPELKPCGseLst5XRO8MS48BQMWMqpETzximCANxzKqhE8MCAY4C8Ap3g0An1PEZJwRwTFXQI3Oh0Xa2oEgW8FpV0Bd9QIBbkSwHHBABfmrMvFCNsBVIp2Nkb/f1RQ1O8ATipQp4sR7kPiVAA8LKyCM9lcon6bESjPlCxdALZZRiithOeXbMdmBNcJPir6AHxuUT7lgVZ6ao+M8LXQzi1IjOUADliUT+Ho7R7bpITeN2oAGCfbTMg4l+ZU8MnsSi4DcBH/nX1+myG8JbkYCVBxmGxJdrF7cuUCAM/xXFFfD4WzhwBMWdrbiwTocphsSV7P+U53EMA/DvWa5F5ETp/DZEtPxUM5F0WrHZ4mm2yLfSG23HGyXZWz3vmcoCuj/JcBdCBiBgJNtmCfX1Tx9N75HkRMJdBkWz/pSvmiSQBfAPit4fPDnKZeE3sWtIsnUt+Trcvop2hnWd33zgSwCMDZSIQ+x8n2iRIT30JDWPksEmYZgJ8typ/04Hul0X+cR3uSrDK8xcqEFkSXl2xHR38D5EYeFLaS1AudbDkf5Wm50d8D4DH+B20jUAXT1h27WXfziip/5Qy5DxXk1sFhTtTlVr7tsVeBsw5Il7fmcTs68uF9gP3h6o7Ib+noRhAdDLkYgM7IqgEQRAc0MVv5WyhM+2kUN64SdEjZVSvSMjzqtKpnOgUdHnMpPCEUTibh5IEeQYeUQbUyJhRONg9SgMWCDul4rJXdQuEVRXqSKNcJOhx2KbxdKHx/+H5Hw3rDOworjwbYO5kam8usA+4WCo+E73c0jAg6vMt1N4D0pqk3fN/bnnMN76r7XSv5QahgXdi+R8FaQXff56lkq1DJx+H6HQ0fCLrbkqeSFQY3lMQm0xLx/wkfYXyFL6+bqaLni/YuAZ4RdDZe5PiTlJae4pfXynT6Odczk842ogC9hl3BtFhTpvOqoKtjeaKfRrYIlZLcXLTSCLnaEHpSQFOYhYbHasxyw0gqzAWwz+CuaZ9pKUyvKHfEvve9hOsh2QRPm2H3Gxp5BOnygEEvY3wvhRdutGxTSTFTOmjw+9UQx1IfNxjgv8SMMGg4P0DyZIhG6S6dTwyNZu6okoDbqRp0sDPkZd89hkRdJm9H+v54rsPBkNGCJ3JyQe+Gf7F0hJbeNyEerjWEmpn8yoe3Z4WlDkYgectHHNxE+jnMrDoon05rziqL+AS4zQg0Wb3YZreFLObEmrQIbXQ7szbyGzkHwEcOncxCs085WjoPrfkmay2AD3PsDN85Gz7fJTraVGA7+x7ONW0AcD2AJbx7OOQOvA5uYwm3uZ5/omQk54n4KoeaLfXTJjfwzVC1yGW8le/+6eAzXZMtoKiaZ6G57CkAZ6AN6OWzurZrBGptIFN82y65rbajl7OpZX4ypNZEV7PRw11yLUGFfyyNdox91wLKrRm2jmzlhVeRKyzbhj7eJTbEy/th3gQw4XD7VFl3MsFtDXPbQ9yXKEa6oiiKoiiKoiiKoiiKoigKWpL/Acm58JO7a11PAAAAAElFTkSuQmCC'
                />
            </defs>
        </>
    ),
});

export const SecondCourses = createIcon({
    displayName: 'SecondCoursesIcon',
    viewBox: '0 0 24 24',
    path: (
        <>
            <rect width='24' height='24' fill='url(#pattern0_5011_19564)' />
            <defs>
                <pattern
                    id='pattern0_5011_19564'
                    patternContentUnits='objectBoundingBox'
                    width='1'
                    height='1'
                >
                    <use
                        xlinkHref='#image0_5011_19564'
                        transform='translate(0.153895 0.125) scale(0.0078125)'
                    />
                </pattern>
                <image
                    id='image0_5011_19564'
                    width='96'
                    height='96'
                    preserveAspectRatio='none'
                    xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAB7klEQVR4nO3aPa9MURSH8cdLaBSIaIWKQkOjuqFQUOjFTSQKnUIkEoX4BkSLRqIUiU/gpaUVEoVvQMKNCGHLSeaWe27BnLXWOc8vWd1ksvf6zz5rzpwBSZIkSZIkSZIkSZI0aa1TMoB5aJ4AA5i15gkwgFl/otuKXz87BhDMAIIZQDADCGYAwQwgmAEEM4BgBhDMAIIZQDADCGYAwQwgmAEEM4BgBhDMAIIZQDADCFYlgN3AryXv9z9rVFUCODlS8w2g48pUA6jivgHEemkAcbYBnw0gzqFO838AOwPXNRsXOgG8iV7YXNzuBPCIBO6OeG1syeoaCVxK0IgWVGskcDRBI1pA/QH2ksB24GuChrSR6xOJvE7QkDZyPSORewka0kauOySy3lnkK+p739nbWRI51lnkt8WMqGoP8LuztwMksmwQD9+SqlqrMIC3GsTDfUJV1zt7ekpCvUE83ClX9aSzp1skNMVB/KHCAN5qEA+zYRf17KsygDftWDKIL1PPzUoDeNPzzqI3gKvAfvI7CNwAfnb28oDELia4Q20rrjMkNlyG3iVoUltRDQ/m0zuxeFbaJlZfgMMUcQ74PrHmn6KY48DbBM1r/1gvgCMU/j/NeeAx8LHIqdhY/AL6EDgd3UBJkiRJkiRJkiSJ2fgLtf6eqlr3ZxsAAAAASUVORK5CYII='
                />
            </defs>
        </>
    ),
});

export const Snacks = createIcon({
    displayName: 'SnacksIcon',
    viewBox: '0 0 24 24',
    path: (
        <>
            <rect width='24' height='24' fill='url(#pattern0_5011_19453)' />
            <defs>
                <pattern
                    id='pattern0_5011_19453'
                    patternContentUnits='objectBoundingBox'
                    width='1'
                    height='1'
                >
                    <use
                        xlinkHref='#image0_5011_19453'
                        transform='translate(0.125 0.125) scale(0.0078125)'
                    />
                </pattern>
                <image
                    id='image0_5011_19453'
                    width='96'
                    height='96'
                    preserveAspectRatio='none'
                    xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAF60lEQVR4nO2deYhXVRTHv9NvHEunbIMSJ2pSqD8iI9tXCI3MaKOghQSLwgKhzTaiMlqgRUOT6Z8gs8WigpKMIrAhprCiZbTSoChnGkhLTdtmcubGiRP8erxz73u/31vuu7/zgQvDzLvvvnO+7913zl3eAIqiKIqiKIqiKIqiKEGxJ4D9yr6IVuIMAB8C+AHAHwBMXRkGsAHAywAWATibBWoGqn9BRtceBCdGnO4qvwF4BsDJDbQ1CcB7AEYAHJmDLZXkwJQCmLryDoBjE7ZD3dqndXXX5GxXpdjehAh/A7gfwDjL+TsArI2pO7tAG72mtwkBDJde4eXdBmClUOdrh3Atw70ZCGAAfBEjws2OOvoUADjJ4qCHADwM4CMAowmfhHZ2/tEA/hKOoxfx3OLvNT+pAfhJcNTzdccdwoLscIiwiLuePuHvuwFcUqK9XvKoxVl0J9czhaMYY6nzpOXvt/zvbMq/TGPHSd1KLeKnGucDad8Tb/DTocSwwuK4+2KO3wPAuymTuC71vMzhAH4XnDfGEU2UySnyCIq2FAcLHU5cAeCAlHUMjzNF6ykxtAtZq6kr2/ml/d94zl4AtjjqPK3eTg7dqd8k7Fa+BfBsZJwnrsxSAdyMBzATwD0A1jUQ4Rih/MlPCUU/xwC4FcCLnDlv4WSNErNtADYCWA3gQc6SJ7aCcGcBeI6jFJND+ZIdurmBuhQUrAr1CToHwMc5Od3kUD4HMAcBMIUTIlPRsqbK+cR5AH72wImmyfILgPNRMW60DDdUsYwCuAkVIUmyZPhFTN3TfACn8hjRRC7dPBe8gCOVXQ04bReffwGfq7vu/NO4zfl8TNKg4HZ4ztwERmxmw9Oseujk4YnBBOcf4LuV6iSFruV6rus6/zx4ygzLpIjh+Hsh5wCN0sHzBHHd224OQemYRhnPd/mII9cgW72C7qCvLBdNd+4pGa8xGoycn36XFacB+NFiz4aEQkv1M+cuR5fTlVOI+wkX+jlruhxd0p2+CECT4zstg2lHIT8mcMkLmqH7VbCNhjP29UGAOywNXYrqc7nFvtt8EEAazXw/oCnBXsHGTQ4bcxdghqWR4xAOJ1jsjC4kKFQAKemiiCg0Ngq20pB3aQK8KjRAazhD4wHB1pfKFGC90MDpCI8zBVv7yxRgm9DAQQiPyYKtW8sUQErZmxkO8JUOwVba3eOdADQvGxqdlmUwpQkgZYl5DA2UTbdg61BKwTIVYEhoIM/hh7I4XrCVwtM4DitCgM9aKAq6WLCVNgPGMacIAV4XGrga4fGIYCstj4/j8SIEeEJooAfh0SfYSrN7UcY5Zu8yY57QAI3Rh8QEy2wf7X9OOzWbGdMtsXFIoegVliUrtZj5kaGiBGi37OMKaW/W24KNtO40upHkFYfzMxWAeE1ohC4kBLosa5yujDj/qQTOz1yAay2rB/ZB9XlMsG9H3XQodTtvJnS+yWON/7DQEC2KqjIHW7ZS9fAylhsSbBrJVQBbPjDQ5DqgsllsceJafgmncXxuAtiyPlpx5sK0WMmcNsuU3WCCd4EJsCwrUgDiGkuDy1tIgJ0ALnPYlQvtlqdglJf7hSzAKIAXAExNYFduXOjY5bh/gAKM8OKE6SnsypXVjk+P1SoswDCHnOt4P/JVjk3hpQhwqOOTAkt8udCc2VuwiQb1cuci/uaD7Ts/oQtwhGATPUGlJzFU7g5cgHPLHqqnSYkPHCIs5+gpRAGWCTbRhwULHUvZ5BDhrQAFqFl2619X9MXQ99++azDqqCpSUjrGQUopa2oGMhTAeHZ8dD2QNB9M+wxKY6pjI18IArRZJqi8mCWc5OjzqyxAm2MpSj/PmnnxglrsyBNMxQTodNz5Y7y83SvofwR8X3EBavzCde3gXwqP0/UejxzqOr6Tv183m1fEJfkwVF8VZgVNoGW9ZQTYK0yApa8qzocHzjIZljHu873vduoxgZR+H6OdJFT9ju/lJMuLOL8RTIVmxLbykPJKHlgrZWxHURRFURRFURRFURRFQTD8AzMMdr1PoUz1AAAAAElFTkSuQmCC'
                />
            </defs>
        </>
    ),
});

export const TherapeuticNutrition = createIcon({
    displayName: 'TherapeuticNutritionIcon',
    viewBox: '0 0 24 24',
    path: (
        <>
            <path
                d='M12.5006 5.56233C12.5006 6.00305 12.5006 6.44377 12.5006 6.89785C12.7692 6.88235 12.7692 6.88235 13.0432 6.86654C14.6997 6.87532 16.1844 7.41896 17.5088 8.40029C17.6216 8.51844 17.7343 8.63658 17.8505 8.7583C18.3094 9.19428 18.7293 9.18762 19.3451 9.23499C19.5329 9.86101 19.5329 9.86101 19.3451 10.2366C14.4972 10.2366 9.64931 10.2366 4.6545 10.2366C4.48756 9.56887 4.48756 9.56887 4.6545 9.23499C4.82321 9.22466 4.99193 9.21433 5.16575 9.20369C5.76284 9.13802 6.03643 8.9234 6.46996 8.51506C7.68204 7.37538 9.27347 6.88279 10.9251 6.87698C11.1145 6.88386 11.3039 6.89075 11.499 6.89785C11.499 6.45713 11.499 6.01641 11.499 5.56233C11.9148 5.35442 12.0684 5.43266 12.5006 5.56233ZM7.6594 9.23499C10.5241 9.23499 13.3887 9.23499 16.3402 9.23499C15.1618 8.05658 13.5855 7.9947 11.9998 7.98295C10.4141 7.9947 8.8378 8.05658 7.6594 9.23499Z'
                fill='black'
            />
            <path
                d='M5.99004 10.9043C6.32058 10.9043 6.65111 10.9043 6.99167 10.9043C6.9941 11.0466 6.99654 11.1889 6.99905 11.3355C7.00927 11.866 7.02166 12.3964 7.03548 12.9268C7.04102 13.1559 7.0457 13.385 7.0495 13.6142C7.05513 13.9445 7.06412 14.2747 7.07318 14.605C7.07755 14.8034 7.08193 15.0019 7.08643 15.2064C7.16491 15.7926 7.29857 16.1147 7.65943 16.5802C8.12882 16.7367 8.42254 16.7699 8.90878 16.7741C9.13529 16.7765 9.13529 16.7765 9.36639 16.7789C9.61054 16.78 9.61054 16.78 9.85963 16.7811C10.0274 16.782 10.1951 16.783 10.368 16.7839C10.723 16.7855 11.078 16.7866 11.4331 16.7873C11.9757 16.7889 12.5182 16.7941 13.0608 16.7993C13.4058 16.8004 13.7507 16.8013 14.0957 16.8019C14.2578 16.804 14.4199 16.8061 14.5869 16.8082C15.7163 16.8089 15.7163 16.8089 16.6741 16.2463C16.8614 15.6845 16.8758 15.2296 16.8939 14.6376C16.9009 14.4208 16.9079 14.204 16.9151 13.9806C16.9217 13.7516 16.9284 13.5226 16.935 13.2936C16.9422 13.0627 16.9495 12.8317 16.9568 12.6007C16.9745 12.0353 16.9916 11.4698 17.008 10.9043C17.3385 10.9043 17.6691 10.9043 18.0096 10.9043C18.0096 11.1247 18.0096 11.345 18.0096 11.5721C18.4504 11.5721 18.8911 11.5721 19.3451 11.5721C19.5329 12.1981 19.5329 12.1981 19.3451 12.5737C18.9044 12.5737 18.4637 12.5737 18.0096 12.5737C18.0149 12.7479 18.0149 12.7479 18.0202 12.9256C18.0342 13.4551 18.0428 13.9847 18.0514 14.5143C18.057 14.697 18.0626 14.8797 18.0683 15.068C18.0811 16.1205 18.0839 16.8009 17.3419 17.5819C16.8062 17.9185 16.3833 17.9593 15.756 17.9642C15.5722 17.9664 15.3883 17.9685 15.1988 17.9707C15.0009 17.9711 14.803 17.9714 14.5991 17.9718C14.3949 17.9729 14.1908 17.974 13.9804 17.9752C13.5485 17.9769 13.1165 17.9776 12.6846 17.9776C12.0244 17.9783 11.3643 17.9844 10.7041 17.9907C10.2844 17.9917 9.86463 17.9924 9.44489 17.9927C9.24766 17.9951 9.05044 17.9975 8.84724 17.9999C7.79835 17.9941 7.10157 17.9888 6.32391 17.248C5.94852 16.7253 5.9507 16.2716 5.95743 15.6386C5.95851 15.46 5.95958 15.2814 5.96069 15.0973C5.96349 14.9118 5.96629 14.7263 5.96917 14.5352C5.97068 14.3471 5.97218 14.1591 5.97373 13.9653C5.97767 13.5014 5.98316 13.0375 5.99004 12.5737C5.54932 12.5737 5.1086 12.5737 4.65453 12.5737C4.46672 11.9477 4.46672 11.9477 4.65453 11.5721C5.09525 11.5721 5.53596 11.5721 5.99004 11.5721C5.99004 11.3517 5.99004 11.1313 5.99004 10.9043Z'
                fill='black'
            />
            <path d='M12 11.2383V15.2448' stroke='black' strokeWidth='1.2' />
            <path d='M9.99658 13.2415H14.0031' stroke='black' strokeWidth='1.2' />
        </>
    ),
});

export const Vegan = createIcon({
    displayName: 'VeganIcon',
    viewBox: '0 0 24 24',
    path: (
        <>
            <rect width='24' height='24' fill='url(#pattern0_5011_9515)' />
            <defs>
                <pattern
                    id='pattern0_5011_9515'
                    patternContentUnits='objectBoundingBox'
                    width='1'
                    height='1'
                >
                    <use
                        xlinkHref='#image0_5011_9515'
                        transform='translate(0.125 0.125) scale(0.0078125)'
                    />
                </pattern>
                <image
                    id='image0_5011_9515'
                    width='96'
                    height='96'
                    preserveAspectRatio='none'
                    xlinkHref='data:image/png;base64,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'
                />
            </defs>
        </>
    ),
});

export const AddRecipe = createIcon({
    displayName: 'AddRecipeIcon',
    viewBox: '0 0 24 24',
    path: (
        <>
            <path
                d='M23.2529 2.91C23.3931 3.05059 23.4718 3.241 23.4718 3.4395C23.4718 3.63801 23.3931 3.82842 23.2529 3.969L21.6884 5.535L18.6884 2.535L20.2529 0.969002C20.3936 0.828399 20.5843 0.749413 20.7832 0.749413C20.9821 0.749413 21.1728 0.828399 21.3134 0.969002L23.2529 2.9085V2.91ZM20.6279 6.594L17.6279 3.594L7.40844 13.815C7.32588 13.8975 7.26373 13.9982 7.22694 14.109L6.01944 17.73C5.99754 17.796 5.99443 17.8668 6.01046 17.9345C6.02649 18.0022 6.06102 18.0641 6.1102 18.1132C6.15938 18.1624 6.22127 18.197 6.28895 18.213C6.35663 18.229 6.42743 18.2259 6.49344 18.204L10.1144 16.9965C10.2251 16.9601 10.3257 16.8985 10.4084 16.8165L20.6279 6.5955V6.594Z'
                fill='currentColor'
            />
            <path
                d='M1.5 20.25C1.5 20.8467 1.73705 21.419 2.15901 21.841C2.58097 22.2629 3.15326 22.5 3.75 22.5H20.25C20.8467 22.5 21.419 22.2629 21.841 21.841C22.2629 21.419 22.5 20.8467 22.5 20.25V11.25C22.5 11.0511 22.421 10.8603 22.2803 10.7197C22.1397 10.579 21.9489 10.5 21.75 10.5C21.5511 10.5 21.3603 10.579 21.2197 10.7197C21.079 10.8603 21 11.0511 21 11.25V20.25C21 20.4489 20.921 20.6397 20.7803 20.7803C20.6397 20.921 20.4489 21 20.25 21H3.75C3.55109 21 3.36032 20.921 3.21967 20.7803C3.07902 20.6397 3 20.4489 3 20.25V3.75C3 3.55109 3.07902 3.36032 3.21967 3.21967C3.36032 3.07902 3.55109 3 3.75 3H13.5C13.6989 3 13.8897 2.92098 14.0303 2.78033C14.171 2.63968 14.25 2.44891 14.25 2.25C14.25 2.05109 14.171 1.86032 14.0303 1.71967C13.8897 1.57902 13.6989 1.5 13.5 1.5H3.75C3.15326 1.5 2.58097 1.73705 2.15901 2.15901C1.73705 2.58097 1.5 3.15326 1.5 3.75V20.25Z'
                fill='currentColor'
            />
        </>
    ),
    defaultProps: {
        boxSize: '24px',
        color: '#FFFFD3',
    },
});

export const Home = createIcon({
    displayName: 'HomeIcon',
    viewBox: '0 0 16 16',
    path: (
        <>
            <path
                d='M2 13.5V7H3V13.5C3 13.6326 3.05268 13.7598 3.14645 13.8536C3.24021 13.9473 3.36739 14 3.5 14H12.5C12.6326 14 12.7598 13.9473 12.8536 13.8536C12.9473 13.7598 13 13.6326 13 13.5V7H14V13.5C14 13.8978 13.842 14.2794 13.5607 14.5607C13.2794 14.842 12.8978 15 12.5 15H3.5C3.10218 15 2.72064 14.842 2.43934 14.5607C2.15804 14.2794 2 13.8978 2 13.5ZM13 2.5V6L11 4V2.5C11 2.36739 11.0527 2.24021 11.1464 2.14645C11.2402 2.05268 11.3674 2 11.5 2H12.5C12.6326 2 12.7598 2.05268 12.8536 2.14645C12.9473 2.24021 13 2.36739 13 2.5Z'
                fill='#FFFFD3'
            />
            <path
                d='M7.29266 1.49994C7.48018 1.31247 7.73449 1.20715 7.99966 1.20715C8.26482 1.20715 8.51913 1.31247 8.70665 1.49994L15.3537 8.14594C15.4475 8.23983 15.5003 8.36716 15.5003 8.49994C15.5003 8.63272 15.4475 8.76005 15.3537 8.85394C15.2598 8.94783 15.1324 9.00057 14.9997 9.00057C14.8669 9.00057 14.7395 8.94783 14.6457 8.85394L7.99966 2.20694L1.35365 8.85394C1.25977 8.94783 1.13243 9.00057 0.999655 9.00057C0.866879 9.00057 0.739542 8.94783 0.645655 8.85394C0.551768 8.76005 0.499023 8.63272 0.499023 8.49994C0.499023 8.36716 0.551768 8.23983 0.645655 8.14594L7.29266 1.49994Z'
                fill='#FFFFD3'
            />
        </>
    ),
});

export const LogOut = () => (
    <svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M8 6.5V5.5H3.5V4L1 6L3.5 8V6.5H8Z' fill='black' />
        <path
            d='M10 1.5H5.5C4.9485 1.5 4.5 1.9485 4.5 2.5V4.5H5.5V2.5H10V9.5H5.5V7.5H4.5V9.5C4.5 10.0515 4.9485 10.5 5.5 10.5H10C10.5515 10.5 11 10.0515 11 9.5V2.5C11 1.9485 10.5515 1.5 10 1.5Z'
            fill='black'
        />
    </svg>
);

export const ILogoMDesk: React.FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg
        width='136'
        height='32'
        viewBox='0 0 136 32'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
    >
        <path
            d='M126.509 25.5797C125.581 25.5797 124.758 25.425 124.038 25.1156C123.325 24.8 122.76 24.3265 122.343 23.6952C121.933 23.0576 121.728 22.259 121.728 21.2994C121.728 20.4913 121.87 19.8095 122.154 19.2539C122.438 18.6984 122.829 18.247 123.328 17.8998C123.827 17.5525 124.401 17.2905 125.051 17.1138C125.701 16.9307 126.395 16.8076 127.134 16.7445C127.961 16.6687 128.626 16.5898 129.131 16.5077C129.636 16.4193 130.002 16.2962 130.23 16.1384C130.463 15.9743 130.58 15.7438 130.58 15.4471V15.3998C130.58 14.9136 130.413 14.538 130.078 14.2729C129.744 14.0077 129.292 13.8751 128.724 13.8751C128.112 13.8751 127.62 14.0077 127.247 14.2729C126.875 14.538 126.638 14.9042 126.537 15.3713L122.268 15.2198C122.394 14.336 122.719 13.5469 123.243 12.8524C123.773 12.1517 124.499 11.6024 125.42 11.2047C126.348 10.8007 127.462 10.5986 128.762 10.5986C129.69 10.5986 130.545 10.7091 131.328 10.9301C132.11 11.1447 132.792 11.4604 133.373 11.877C133.953 12.2874 134.401 12.7924 134.717 13.3922C135.039 13.9919 135.2 14.6769 135.2 15.4471V25.3334H130.845V23.3069H130.731C130.473 23.7994 130.141 24.216 129.737 24.5569C129.34 24.8978 128.869 25.1535 128.327 25.324C127.79 25.4944 127.184 25.5797 126.509 25.5797ZM127.939 22.5494C128.437 22.5494 128.885 22.4484 129.283 22.2463C129.687 22.0443 130.009 21.7665 130.249 21.413C130.488 21.0532 130.608 20.6365 130.608 20.163V18.7804C130.476 18.8499 130.315 18.913 130.125 18.9698C129.942 19.0266 129.74 19.0803 129.52 19.1308C129.299 19.1813 129.071 19.2255 128.838 19.2634C128.604 19.3013 128.38 19.336 128.166 19.3676C127.73 19.437 127.358 19.5443 127.049 19.6895C126.746 19.8347 126.512 20.0241 126.348 20.2577C126.19 20.485 126.111 20.7564 126.111 21.0721C126.111 21.5519 126.282 21.9181 126.623 22.1706C126.97 22.4231 127.408 22.5494 127.939 22.5494Z'
            fill='#2B823F'
        />
        <path
            d='M111.954 25.5797C111.026 25.5797 110.203 25.425 109.483 25.1156C108.77 24.8 108.205 24.3265 107.789 23.6952C107.378 23.0576 107.173 22.259 107.173 21.2994C107.173 20.4913 107.315 19.8095 107.599 19.2539C107.883 18.6984 108.275 18.247 108.773 17.8998C109.272 17.5525 109.846 17.2905 110.496 17.1138C111.146 16.9307 111.841 16.8076 112.579 16.7445C113.406 16.6687 114.072 16.5898 114.577 16.5077C115.082 16.4193 115.448 16.2962 115.675 16.1384C115.908 15.9743 116.025 15.7438 116.025 15.4471V15.3998C116.025 14.9136 115.858 14.538 115.523 14.2729C115.189 14.0077 114.738 13.8751 114.17 13.8751C113.557 13.8751 113.065 14.0077 112.693 14.2729C112.32 14.538 112.084 14.9042 111.983 15.3713L107.713 15.2198C107.839 14.336 108.164 13.5469 108.688 12.8524C109.218 12.1517 109.944 11.6024 110.866 11.2047C111.793 10.8007 112.907 10.5986 114.207 10.5986C115.135 10.5986 115.99 10.7091 116.773 10.9301C117.556 11.1447 118.237 11.4604 118.818 11.877C119.399 12.2874 119.847 12.7924 120.162 13.3922C120.484 13.9919 120.645 14.6769 120.645 15.4471V25.3334H116.29V23.3069H116.177C115.918 23.7994 115.587 24.216 115.183 24.5569C114.785 24.8978 114.315 25.1535 113.772 25.324C113.236 25.4944 112.63 25.5797 111.954 25.5797ZM113.384 22.5494C113.882 22.5494 114.331 22.4484 114.728 22.2463C115.132 22.0443 115.454 21.7665 115.694 21.413C115.934 21.0532 116.054 20.6365 116.054 20.163V18.7804C115.921 18.8499 115.76 18.913 115.571 18.9698C115.388 19.0266 115.186 19.0803 114.965 19.1308C114.744 19.1813 114.517 19.2255 114.283 19.2634C114.05 19.3013 113.826 19.336 113.611 19.3676C113.176 19.437 112.803 19.5443 112.494 19.6895C112.191 19.8347 111.957 20.0241 111.793 20.2577C111.636 20.485 111.557 20.7564 111.557 21.0721C111.557 21.5519 111.727 21.9181 112.068 22.1706C112.415 22.4231 112.854 22.5494 113.384 22.5494Z'
            fill='#2B823F'
        />
        <path
            d='M97.1796 25.5417C96.1066 25.5417 95.1315 25.2639 94.2542 24.7084C93.3769 24.1528 92.6763 23.3195 92.1525 22.2084C91.6286 21.0972 91.3667 19.7178 91.3667 18.0701C91.3667 16.3593 91.6381 14.9514 92.1809 13.8466C92.7237 12.7418 93.4337 11.9243 94.311 11.394C95.1946 10.8637 96.1445 10.5985 97.1606 10.5985C97.9243 10.5985 98.5775 10.7311 99.1203 10.9963C99.6631 11.2551 100.111 11.5897 100.465 12C100.818 12.4104 101.086 12.8365 101.269 13.2785H101.364V5.93945H105.994V25.3333H101.411V22.9754H101.269C101.074 23.4236 100.796 23.8435 100.436 24.2349C100.077 24.6263 99.6253 24.9419 99.0825 25.1818C98.546 25.4217 97.9117 25.5417 97.1796 25.5417ZM98.789 21.9337C99.3507 21.9337 99.8304 21.7759 100.228 21.4603C100.626 21.1383 100.932 20.6869 101.146 20.1061C101.361 19.5253 101.468 18.8435 101.468 18.0606C101.468 17.2652 101.361 16.5802 101.146 16.0057C100.938 15.4312 100.632 14.9893 100.228 14.68C99.8304 14.3706 99.3507 14.216 98.789 14.216C98.2146 14.216 97.7287 14.3738 97.331 14.6894C96.9334 15.0051 96.6305 15.4502 96.4222 16.0247C96.2202 16.5992 96.1192 17.2778 96.1192 18.0606C96.1192 18.8435 96.2234 19.5253 96.4317 20.1061C96.6399 20.6869 96.9397 21.1383 97.331 21.4603C97.7287 21.7759 98.2146 21.9337 98.789 21.9337Z'
            fill='#2B823F'
        />
        <path
            d='M76.3003 25.6081C74.7793 25.6081 73.4665 25.3082 72.362 24.7085C71.2638 24.1024 70.4181 23.2407 69.8248 22.1232C69.2378 20.9995 68.9443 19.6643 68.9443 18.1176C68.9443 16.615 69.241 15.3019 69.8343 14.1782C70.4275 13.0481 71.2638 12.1706 72.3431 11.5456C73.4223 10.9143 74.6941 10.5986 76.1583 10.5986C77.1934 10.5986 78.1401 10.7596 78.9985 11.0816C79.8569 11.4036 80.5985 11.8802 81.2233 12.5115C81.8481 13.1428 82.3341 13.9225 82.6812 14.8505C83.0284 15.7722 83.2019 16.8297 83.2019 18.0229V19.1782H70.5632V16.4888H78.8944C78.8881 15.9963 78.7713 15.5576 78.5441 15.1725C78.3169 14.7874 78.0044 14.4875 77.6068 14.2729C77.2155 14.0519 76.7642 13.9414 76.253 13.9414C75.7355 13.9414 75.2716 14.0582 74.8613 14.2918C74.4511 14.5191 74.1261 14.8316 73.8862 15.2293C73.6464 15.6207 73.5201 16.0658 73.5075 16.5645V19.3013C73.5075 19.8947 73.6243 20.4155 73.8578 20.8638C74.0913 21.3057 74.4227 21.6497 74.8519 21.896C75.281 22.1422 75.7923 22.2653 76.3856 22.2653C76.7958 22.2653 77.1682 22.2085 77.5027 22.0948C77.8372 21.9812 78.1244 21.8139 78.3642 21.5929C78.604 21.372 78.7839 21.1005 78.9038 20.7785L83.1546 20.9016C82.9779 21.8549 82.5897 22.6851 81.9901 23.3922C81.3969 24.0929 80.6174 24.639 79.6517 25.0304C78.6861 25.4155 77.569 25.6081 76.3003 25.6081Z'
            fill='#2B823F'
        />
        <path
            d='M61.3033 25.6081C59.7822 25.6081 58.4694 25.3082 57.3649 24.7085C56.2667 24.1024 55.421 23.2407 54.8277 22.1232C54.2407 20.9995 53.9473 19.6643 53.9473 18.1176C53.9473 16.615 54.2439 15.3019 54.8372 14.1782C55.4305 13.0481 56.2667 12.1706 57.346 11.5456C58.4252 10.9143 59.697 10.5986 61.1613 10.5986C62.1963 10.5986 63.1431 10.7596 64.0014 11.0816C64.8598 11.4036 65.6014 11.8802 66.2262 12.5115C66.8511 13.1428 67.337 13.9225 67.6842 14.8505C68.0313 15.7722 68.2049 16.8297 68.2049 18.0229V19.1782H55.5662V16.4888H63.8973C63.891 15.9963 63.7742 15.5576 63.547 15.1725C63.3198 14.7874 63.0074 14.4875 62.6097 14.2729C62.2184 14.0519 61.7672 13.9414 61.2559 13.9414C60.7384 13.9414 60.2745 14.0582 59.8643 14.2918C59.454 14.5191 59.129 14.8316 58.8891 15.2293C58.6493 15.6207 58.5231 16.0658 58.5105 16.5645V19.3013C58.5105 19.8947 58.6272 20.4155 58.8607 20.8638C59.0943 21.3057 59.4256 21.6497 59.8548 21.896C60.284 22.1422 60.7952 22.2653 61.3885 22.2653C61.7987 22.2653 62.1711 22.2085 62.5056 22.0948C62.8401 21.9812 63.1273 21.8139 63.3671 21.5929C63.607 21.372 63.7868 21.1005 63.9068 20.7785L68.1575 20.9016C67.9808 21.8549 67.5927 22.6851 66.9931 23.3922C66.3998 24.0929 65.6203 24.639 64.6547 25.0304C63.689 25.4155 62.5719 25.6081 61.3033 25.6081Z'
            fill='#2B823F'
        />
        <path
            d='M42.9903 30.7878C42.4349 30.7878 41.911 30.7436 41.4187 30.6552C40.9264 30.5732 40.5036 30.4627 40.1501 30.3238L41.1726 26.962C41.627 27.1136 42.0372 27.202 42.4033 27.2272C42.7757 27.2525 43.0944 27.1925 43.3595 27.0473C43.6309 26.9084 43.8392 26.659 43.9843 26.2992L44.1642 25.8636L38.9951 10.7878H43.8423L46.5215 21.1666H46.673L49.3901 10.7878H54.2657L48.7842 26.7253C48.5191 27.5208 48.1436 28.2215 47.6576 28.8276C47.1779 29.44 46.5563 29.9197 45.7926 30.267C45.0352 30.6142 44.1011 30.7878 42.9903 30.7878Z'
            fill='#2B823F'
        />
        <path
            d='M90.2339 16.2222C91.0379 17.6957 90.8338 20.5972 89.3446 21.3325C87.728 22.1085 84.9013 21.3325 83.7438 19.5579C85.3456 19.5548 86.3493 19.2618 87.568 18.8889C88.9003 18.2214 89.774 17.3223 90.2339 16.2222Z'
            fill='#29813F'
        />
        <path
            d='M29.0645 15.1691C29.0645 14.9226 29.0868 14.7433 28.9302 14.5416C28.6618 14.183 28.3486 13.8468 28.0354 13.533C27.5433 13.0848 26.8945 12.7262 26.3129 12.4349C25.0154 11.7849 23.6285 11.3367 22.2192 11.0229C19.2663 10.373 16.1792 10.2609 13.1592 10.3954C11.9289 10.4626 10.6985 10.5299 9.4905 10.754C9.02072 10.8436 8.55095 10.9333 8.10354 11.0902C7.6114 11.2471 7.09688 11.4263 6.69422 11.7401C6.56 11.8298 6.44814 11.9418 6.33629 12.0539C6.24681 12.1659 6.15733 12.3004 6.09022 12.4349C6.02311 12.5469 5.93363 12.659 5.88889 12.7935C5.84415 12.9055 5.82178 12.9952 5.82178 13.0848C5.82178 13.1969 5.86652 13.2865 5.86652 13.3762C5.86652 13.3986 6.56 13.4658 6.62711 13.4882C6.89555 13.533 7.16399 13.5555 7.43243 13.5779C8.41673 13.6899 9.42339 13.7796 10.4077 13.8692C12.4657 14.0485 14.5462 14.2502 16.6266 14.4295C18.6176 14.6088 20.5861 14.7657 22.5771 14.9674C24.5904 15.1691 26.5814 15.438 28.6171 15.3932C28.7289 15.3932 28.8631 15.3932 28.975 15.3932C29.1316 15.3932 29.0645 15.326 29.0645 15.1691ZM11.1182 12.2224C10.7827 12.4241 10.6735 12.4446 10.3406 12.7486C9.78131 13.3313 8.79702 13.0176 8.0588 12.9503C7.94695 12.9503 7.8351 12.9279 7.70088 12.9055C7.56666 12.8831 7.34295 12.9279 7.36532 12.7935C7.36532 12.6142 7.41006 12.4797 7.47718 12.3004C7.56666 12.0987 7.92458 12.0091 8.12591 11.9194C8.39436 11.8073 8.6628 11.7177 8.95361 11.6505C10.005 11.3591 11.1235 11.1798 12.2197 11.2022C12.2644 11.2022 12.3091 11.2022 12.3539 11.2022C11.9289 11.4936 11.563 11.955 11.1182 12.2224Z'
            fill='#29813F'
        />
        <path
            d='M6.04665 4.52717C4.90577 4.45993 3.89911 3.36176 4.01096 2.21876C4.14518 0.986116 5.39791 0.112059 6.56117 0C6.11376 0.717175 5.37554 1.32229 5.15184 2.17394C4.90577 3.048 5.57687 3.85482 6.04665 4.52717Z'
            fill='#29813F'
        />
        <path
            d='M7.25342 9.20716C7.85741 7.72799 8.88645 6.47293 9.51281 4.99376C9.84837 4.20935 9.96022 3.42494 9.19963 2.88705C8.618 2.46123 7.92452 2.23711 7.27579 1.99058C8.08112 1.65441 9.13252 1.632 9.93785 1.99058C10.8998 2.41641 11.4367 3.40252 11.3024 4.43346C11.1682 5.57646 10.4747 6.6074 9.69177 7.43664C8.97593 8.15381 8.14823 8.78134 7.25342 9.20716Z'
            fill='#29813F'
        />
        <path
            d='M3.69708 14.9451C1.57191 14.833 -0.665116 12.8384 0.184954 10.5748C0.900801 8.6698 3.22731 7.5268 5.10641 7.28027C4.05501 8.51292 2.51146 9.4318 1.75087 10.911C0.945542 12.5246 2.66805 13.9366 3.69708 14.9451Z'
            fill='#29813F'
        />
        <path
            d='M20.4077 10.0368L16.1574 9.61095C15.8889 9.58854 15.6876 9.34201 15.7323 9.07307L15.8889 7.45942C15.9113 7.19048 16.1574 6.98877 16.4258 7.0336L20.6761 7.45942C20.9446 7.48183 21.1459 7.72836 21.1012 7.9973L20.9446 9.61095C20.9222 9.87989 20.6761 10.0592 20.4077 10.0368Z'
            fill='#2B823F'
        />
        <path
            d='M32.0182 19.2029L31.9735 18.7323C31.9064 18.1495 31.3919 17.7237 30.8102 17.791L28.1929 18.0599C28.1705 17.6565 27.8574 17.3203 27.4547 17.3203H6.56088C6.15822 17.3203 5.82267 17.6565 5.82267 18.0823V18.4857L3.36194 18.2392C2.78031 18.172 2.2658 18.5978 2.19869 19.1805L2.15395 19.6511C2.08684 20.2338 2.51187 20.7493 3.0935 20.8165L5.82267 21.1079V21.5561V22.1388V28.4365C5.82267 30.4088 6.96355 32 8.37287 32H25.6427C27.052 32 28.1929 30.4088 28.1929 28.4365V22.1388V21.5561V20.6597L31.0563 20.3683C31.6379 20.3235 32.063 19.7856 32.0182 19.2029ZM12.3995 30.2967H9.37954C9.35717 30.2967 9.3348 30.2967 9.31243 30.2967H9.26768C8.3505 30.2967 7.61229 29.3778 7.61229 28.2348V22.0492C7.61229 21.982 7.61229 21.9371 7.61229 21.8699V20.5476C7.61229 20.2338 7.88073 19.9649 8.19391 19.9649H9.26768H9.31243H9.37954H11.5271H12.3995V30.2967Z'
            fill='#2B823F'
        />
    </svg>
);

export const ILogoMobi: React.FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg
        width='32'
        height='32'
        viewBox='0 0 32 32'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
    >
        <path
            d='M29.0458 15.1691C29.0458 14.9226 29.0681 14.7433 28.9116 14.5416C28.6434 14.183 28.3304 13.8468 28.0174 13.5331C27.5256 13.0848 26.8773 12.7262 26.296 12.4349C24.9994 11.7849 23.6134 11.3367 22.205 11.0229C19.254 10.373 16.169 10.2609 13.151 10.3954C11.9214 10.4626 10.6919 10.5299 9.48467 10.754C9.0152 10.8436 8.54573 10.9333 8.09862 11.0902C7.6068 11.2471 7.09262 11.4263 6.69023 11.7401C6.55609 11.8298 6.44431 11.9418 6.33254 12.0539C6.24311 12.1659 6.15369 12.3004 6.08663 12.4349C6.01956 12.5469 5.93014 12.659 5.88543 12.7935C5.84071 12.9055 5.81836 12.9952 5.81836 13.0848C5.81836 13.1969 5.86307 13.2865 5.86307 13.3762C5.86307 13.3986 6.55609 13.4658 6.62316 13.4882C6.89143 13.5331 7.15969 13.5555 7.42796 13.5779C8.4116 13.6899 9.4176 13.7796 10.4012 13.8692C12.458 14.0485 14.537 14.2502 16.6161 14.4295C18.6057 14.6088 20.573 14.7657 22.5627 14.9674C24.5747 15.1691 26.5643 15.4381 28.5986 15.3932C28.7104 15.3932 28.8446 15.3932 28.9563 15.3932C29.1128 15.3932 29.0458 15.326 29.0458 15.1691ZM11.1113 12.2224C10.776 12.4241 10.6669 12.4446 10.3342 12.7486C9.77529 13.3313 8.79165 13.0176 8.05391 12.9503C7.94214 12.9503 7.83036 12.9279 7.69622 12.9055C7.56209 12.8831 7.33854 12.9279 7.36089 12.7935C7.36089 12.6142 7.4056 12.4797 7.47267 12.3004C7.56209 12.0987 7.91978 12.0091 8.12098 11.9194C8.38925 11.8073 8.65751 11.7177 8.94813 11.6505C9.99884 11.3591 11.1166 11.1798 12.212 11.2022C12.2568 11.2022 12.3015 11.2022 12.3462 11.2022C11.9214 11.4936 11.5558 11.955 11.1113 12.2224Z'
            fill='#29813F'
        />
        <path
            d='M6.04286 4.52718C4.90273 4.45994 3.89673 3.36177 4.00851 2.21877C4.14264 0.986118 5.39455 0.112059 6.55704 0C6.10993 0.717177 5.3722 1.32229 5.14864 2.17394C4.90273 3.048 5.5734 3.85483 6.04286 4.52718Z'
            fill='#29813F'
        />
        <path
            d='M7.24902 9.20718C7.85262 7.728 8.88098 6.47294 9.50693 4.99376C9.84226 4.20935 9.95404 3.42494 9.19395 2.88706C8.61271 2.46123 7.91969 2.23711 7.27138 1.99059C8.07618 1.65441 9.12689 1.632 9.93169 1.99059C10.893 2.41641 11.4295 3.40253 11.2954 4.43347C11.1612 5.57647 10.4682 6.60741 9.68578 7.43665C8.9704 8.15382 8.14324 8.78135 7.24902 9.20718Z'
            fill='#29813F'
        />
        <path
            d='M3.69465 14.9451C1.57087 14.833 -0.664678 12.8384 0.184832 10.5748C0.900209 8.6698 3.22518 7.5268 5.10305 7.28027C4.05234 8.51292 2.50981 9.4318 1.74972 10.911C0.94492 12.5246 2.6663 13.9366 3.69465 14.9451Z'
            fill='#29813F'
        />
        <path
            d='M20.3944 10.0368L16.1468 9.61095C15.8785 9.58854 15.6773 9.34201 15.7221 9.07307L15.8785 7.45942C15.9009 7.19048 16.1468 6.98877 16.4151 7.0336L20.6626 7.45942C20.9309 7.48183 21.1321 7.72836 21.0874 7.9973L20.9309 9.61095C20.9085 9.87989 20.6626 10.0592 20.3944 10.0368Z'
            fill='#2B823F'
        />
        <path
            d='M31.9971 19.2029L31.9524 18.7323C31.8853 18.1495 31.3712 17.7237 30.7899 17.791L28.1743 18.0599C28.152 17.6565 27.839 17.3203 27.4366 17.3203H6.55652C6.15412 17.3203 5.81879 17.6565 5.81879 18.0823V18.4857L3.35968 18.2392C2.77843 18.172 2.26425 18.5978 2.19719 19.1805L2.15248 19.6511C2.08541 20.2338 2.51017 20.7493 3.09141 20.8166L5.81879 21.1079V21.5561V22.1388V28.4366C5.81879 30.4088 6.95892 32 8.36732 32H25.6258C27.0342 32 28.1743 30.4088 28.1743 28.4366V22.1388V21.5561V20.6597L31.0358 20.3683C31.6171 20.3235 32.0418 19.7856 31.9971 19.2029ZM12.3913 30.2967H9.37332C9.35096 30.2967 9.3286 30.2967 9.30625 30.2967H9.26154C8.34496 30.2967 7.60723 29.3779 7.60723 28.2348V22.0492C7.60723 21.982 7.60723 21.9371 7.60723 21.8699V20.5476C7.60723 20.2338 7.87549 19.9649 8.18847 19.9649H9.26154H9.30625H9.37332H11.5194H12.3913V30.2967Z'
            fill='#2B823F'
        />
    </svg>
);
