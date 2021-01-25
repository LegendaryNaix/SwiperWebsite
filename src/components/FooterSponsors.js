import sponsors from '../shared/sponsors';
// import Image from 'next/image';

export default function FooterSponsors() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 my-8 gap-x-3">
      {sponsors.map(({ href, title, src, width, height, alt }) => {
        return (
          <a
            className="flex justify-center items-center p-4 border text-center hover:bg-gray-50"
            href={href}
            key={'/' + src}
            title={title}
            rel="noopener"
            target="_blank"
          >
            <img
              width={width}
              height={height}
              src={`/images/${src}`}
              alt={alt}
            />
          </a>
        );
      })}
    </div>
  );
}
