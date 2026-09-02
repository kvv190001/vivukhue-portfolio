type ArticleItemProps = {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  href: string;
};

export default function ArticleItem({ title, excerpt, date, readTime, href }: ArticleItemProps) {
  return (
    <article className="group pb-8 border-b border-gray-800/50 light:border-gray-300 last:border-0">
      <a className="block" href={href}>
        <div className="flex justify-between items-start gap-4 mb-3">
          <h3 className="text-xl font-bold group-hover:text-orange-500 transition-colors">
            {title}
          </h3>
          <i className="fas fa-arrow-up-right text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity mt-1 flex-shrink-0" />
        </div>
        <p className="text-gray-400 light:text-gray-600 text-sm leading-relaxed mb-4">
          {excerpt}
        </p>
        <div className="flex justify-between items-center text-xs text-gray-600 light:text-gray-500 font-medium">
          <span>{date}</span>
          <span>{readTime}</span>
        </div>
      </a>
    </article>
  );
}
