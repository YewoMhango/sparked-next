'use client';
import { DarkThemeToggle, Navbar, Sidebar, TextInput } from 'flowbite-react';
import Link from 'next/link';
import { ReactNode, useState } from 'react';
import { BiSolidLike } from 'react-icons/bi';
import { BsFire } from 'react-icons/bs';
import { HiSearch, HiX } from 'react-icons/hi';
import { IoStar } from 'react-icons/io5';
import { MdMenu } from 'react-icons/md';

import styles from './Layout.module.css';
import { bookTitles } from '@components/layouts/library/book-titles';
import AppLogo from '@components/logo';

export default function LibraryLayout({ children }: { children: ReactNode | ReactNode[] }) {
  const [sidebarIsCollapsed, setSidebarIsCollapsed] = useState(true);
  const toggleSidebar = () => setSidebarIsCollapsed((value) => !value);

  return (
    <div className="h-[calc(100vh_-_62px)]">
      <LibraryNavbar toggleSidebar={toggleSidebar} sidebarIsCollapsed={sidebarIsCollapsed} />
      <div className="md:grid md:grid-cols-[300px_calc(100%_-_300px)] h-[calc(100vh_-_62px)]">
        <LibrarySidebar sidebarIsCollapsed={sidebarIsCollapsed} toggleSidebar={toggleSidebar} />
        <div className="max-h-full overflow-y-hidden">{children}</div>
      </div>
    </div>
  );
}

function LibraryNavbar({
  toggleSidebar,
  sidebarIsCollapsed,
}: {
  toggleSidebar: () => void;
  sidebarIsCollapsed: boolean;
}) {
  let [searching, setSearching] = useState(false);

  return (
    <Navbar fluid rounded className="sticky top-0 z-[60]">
      <div className={`pl-2 flex flex-row gap-4 ${searching ? 'hidden md:flex' : ''}`}>
        <button
          type="button"
          className="text-gray-500 -ml-3 mr-1 p-2 md:ml-0 md:mr-0 md:hidden"
          onClick={toggleSidebar}
        >
          {sidebarIsCollapsed ? (
            <MdMenu aria-label="Open sidebar" className="h-6 w-6 cursor-pointer text-gray-500 dark:text-gray-400" />
          ) : (
            <HiX aria-label="Close sidebar" className="h-6 w-6 cursor-pointer text-gray-500 dark:text-gray-400" />
          )}
        </button>
        <Navbar.Brand as={Link} href="/">
          <AppLogo />
        </Navbar.Brand>
      </div>
      <div className={`flex flex-row gap-4 ${searching ? 'w-full md:w-fit' : ''}`}>
        <TextInput
          className={`w-full ${searching ? '' : 'hidden md:block'}`}
          type="search"
          placeholder="Search"
          icon={HiSearch}
        />
        <button
          onClick={() => setSearching((value) => !value)}
          className="rounded-lg md:hidden p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
        >
          {searching ? <HiX size={22} /> : <HiSearch size={22} />}
        </button>
        <DarkThemeToggle className={`${searching ? 'hidden md:flex' : ''}`} />
      </div>
    </Navbar>
  );
}

function LibrarySidebar({
  sidebarIsCollapsed,
  toggleSidebar,
}: {
  sidebarIsCollapsed: boolean;
  toggleSidebar: () => void;
}) {
  return (
    <>
      <div
        className={`fixed top-[62px] md:top-0 inset-0 z-50 w-[300px] flex-none md:sticky md:block h-[calc(100vh_-_62px)] overflow-y-clip ${
          sidebarIsCollapsed ? 'hidden' : ''
        }`}
      >
        <Sidebar
          className={`${styles.sidebar} w-full custom-scrollbar overflow-y-auto h-[calc(100vh_-_62px)] bg-white dark:bg-gray-800`}
        >
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Collapse icon={BsFire} label="Trending">
                {bookTitles.slice(0, 6).map((title) => (
                  <Sidebar.Item href="#" key={title}>
                    {title}
                  </Sidebar.Item>
                ))}
              </Sidebar.Collapse>
              <Sidebar.Collapse icon={BiSolidLike} label="Recommended">
                {bookTitles.slice(0, 6).map((title) => (
                  <Sidebar.Item href="#" key={title}>
                    {title}
                  </Sidebar.Item>
                ))}
              </Sidebar.Collapse>
              <Sidebar.Collapse icon={IoStar} label="Favorites">
                {bookTitles.slice(0, 6).map((title) => (
                  <Sidebar.Item href="#" key={title}>
                    {title}
                  </Sidebar.Item>
                ))}
              </Sidebar.Collapse>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>

      {!sidebarIsCollapsed && (
        <div
          onClick={toggleSidebar}
          onKeyUp={(key) => key.code === 'Escape' && toggleSidebar()}
          className="fixed cursor-pointer inset-0 z-40 bg-gray-900/50 dark:bg-gray-900/60 backdrop-blur-sm md:hidden"
        />
      )}
    </>
  );
}
