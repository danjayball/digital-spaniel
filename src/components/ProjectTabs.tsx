import React, { HTMLProps, useRef, useState } from 'react';
import cx from 'clsx';
import './ProjectTabs.css';

interface ProjectTabsProps extends HTMLProps<HTMLUListElement> {
  tabs: string[];
  initialTab?: number;
  onTabChange?: (index: number) => void;
}

function ProjectTabs({
  tabs,
  initialTab = 0,
  onTabChange = () => {},
}: ProjectTabsProps) {
  const [currentTab, setCurrentTab] = useState(initialTab);

  const onTabClick = (index: number) => {
    setCurrentTab(index);
    onTabChange(index);
  };

  const containerRef = useRef<HTMLUListElement>(null);
  const width = containerRef.current?.offsetWidth ?? 0;

  return (
    <nav className="relative">
      <ul ref={containerRef} className="hidden lg:inline-flex text-xl w-auto">
        {tabs.map((label, index) => (
          <li key={label}>
            <button
              className={cx(
                'project-tab w-48 py-2 text-primary relative focus:outline-none',
                {
                  active: currentTab === index,
                  'font-bold': currentTab === index,
                }
              )}
              aria-current={currentTab === index ? 'true' : 'false'}
              onClick={() => onTabClick(index)}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>

      <label htmlFor="category" className="sr-only hidden sm:block">
        Project Category
      </label>

      <select
        name="category"
        id="category"
        className="inline-block px-4 py-2 border-b-2 text-lg border-accent sm:hidden"
        onChange={(e) => onTabClick(parseInt(e.target.value, 10))}
        value={currentTab}
      >
        {tabs.map((label, index) => (
          <option key={index} value={index}>
            {label}
          </option>
        ))}
      </select>

      <div
        className="hidden absolute h-0.5 bottom-0 bg-accent w-48 transition-transform z-10 sm:block"
        style={{
          transform: `translateX(${(currentTab / tabs.length) * width}px)`,
        }}
      ></div>
    </nav>
  );
}

export default ProjectTabs;
