import React from 'react';

function Github({size = 64, ...props}: any) {
	const title = props.title || "github";

	return (
		<svg viewBox={`0 0 ${size} ${size}`} xmlns="http://www.w3.org/2000/svg">
            <title>{title}</title>
            <g fill="#000000">
                <path d="M63.7 31C63.1 14.7 49.7 1.4 33.4.7 24.6.4 16.3 3.5 10 9.6 3.7 15.7.2 23.8.2 32.5c0 14.4 9.7 27 23.5 30.7.3.1.7.1 1 .1.8 0 1.6-.3 2.3-.8.9-.7 1.5-1.8 1.5-3V56c0-1 .1-5.2.1-5.9.1-.7.3-1.2.7-1.7.5-.7.6-1.5.2-2.3-.3-.7-1-1.1-1.8-1.2-.7-.1-1.5-.2-2-.4-.8-.2-1.7-.6-2.6-1.1-.7-.4-1.3-.9-1.9-1.6-.5-.6-.9-1.5-1.3-2.7-.4-1.3-.6-2.7-.6-4.2 0-2.1.6-3.7 1.9-5.2l.8-.8-.4-1c-.6-.9-.6-2.1-.2-3.6.2.1.5.2.8.3 1.5.6 2 .9 2.2 1l.1.1c.4.2.7.5 1 .6l1 .6.7-.2c1.8-.5 3.6-.7 5.5-.7s3.7.2 5.5.7l.7.2 1.8-1.1c.8-.5 1.7-.9 2.5-1.2.3-.1.5-.2.7-.2.4 1.4.4 2.7-.1 3.9l-.4 1 .6.7c1.3 1.4 1.9 3.1 1.9 5.2 0 1.6-.2 3-.6 4.1-.4 1.1-.8 2-1.4 2.7-.5.6-1.2 1.1-2 1.6-1 .5-1.8.8-2.6 1.1-.6.2-1.4.3-2.2.4-.7.1-1.3.6-1.6 1.3-.3.7-.2 1.4.2 2.1.5.7.7 1.6.7 2.8v8c0 1.2.6 2.3 1.6 3 1 .7 2.2.9 3.3.6 14-4.2 23.2-17.4 22.4-31.9zM40.4 59.6h-.2s-.1-.1-.1-.2v-8c0-1.1-.2-2.1-.5-3.1.3-.1.5-.1.8-.2 1.1-.3 2.1-.7 3.4-1.4 1.3-.8 2.2-1.6 3-2.4 1-1.1 1.5-2.5 2-3.8.5-1.5.8-3.2.8-5.2 0-2.6-.7-4.8-2.2-6.7.5-2 .3-4.2-.6-6.5l-.3-.8-.8-.3c-1-.3-2.2-.2-3.7.4-1 .4-2.1.9-3.1 1.5l-.6.3c-1.9-.5-3.7-.7-5.7-.7-1.9 0-3.8.2-5.7.7-.2-.1-.4-.2-.6-.4-.6-.4-1.5-.8-2.8-1.3-1.6-.7-2.9-.9-3.9-.5l-.8.3-.3.8c-.9 2.4-1.1 4.6-.5 6.5-1.4 1.9-2.2 4.2-2.2 6.7 0 1.8.2 3.5.7 5.2.5 1.6 1.1 2.9 1.9 3.9.9 1.1 1.9 1.9 3 2.5 1.1.6 2.2 1 3.3 1.3.3.1.5.1.8.2-.2.5-.3 1.1-.4 1.6V53.3c-2.7-.9-4.8-2.1-6.6-4-1.3-1.5-2.8-2.9-3.5-3.3-1.5-.7-2.5.8-2.2 1.6.3 1.1 1.9 1.7 2.7 2.5.9 1 1.1 2.3 1.9 3.3 1.1 1.6 4.9 3.5 7.7 3.2v3s0 .1-.1.2c0 0-.1.1-.2 0-12.4-3.3-21-14.5-21-27.3 0-7.8 3.1-15 8.7-20.4 5.6-5.4 13-8.2 20.8-7.9 14.6.6 26.4 12.4 27 26.9.6 13-7.6 24.7-19.9 28.5z"/>
	</g>
</svg>
	);
};

export default Github;