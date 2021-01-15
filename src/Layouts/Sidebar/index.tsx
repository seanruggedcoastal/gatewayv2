import React, { useRef, useState, forwardRef, useImperativeHandle } from 'react';
import { SidebarBody, SidebarRefObject, SidebarProps, Sidebar } from '@paljs/ui/Sidebar';
import { Menu, MenuRefObject } from '@paljs/ui/Menu';
import menuItems from '../menuItem';
import { Link } from 'gatsby';
import { Location } from '@reach/router';

export const getPathReady = (path: string) => {
  return path.endsWith('/') ? path.slice(0, -1) : path;
};

const SidebarCustom: React.ForwardRefRenderFunction<Omit<SidebarRefObject, 'hide'>, SidebarProps> = (props, ref) => {
  const sidebarRef = useRef<SidebarRefObject>(null);
  const menuRef = useRef<MenuRefObject>(null);
  const [seeHeader, setSeeHeader] = useState(true);

  useImperativeHandle(ref, () => ({
    toggle() {
      sidebarRef.current?.toggle();
    },
  }));

  const getState = (state?: 'hidden' | 'visible' | 'compacted' | 'expanded') => {
    setSeeHeader(state !== 'compacted');
  };

  return (
    <Sidebar getState={getState} ref={sidebarRef} property="start" containerFixed responsive className="menu-sidebar">
      {seeHeader && <header></header>}
      <SidebarBody>
        <Location>
          {({ location }) => (
            <Menu
              className="sidebar-menu"
              Link={Link}
              ref={menuRef}
              items={menuItems}
              currentPath={getPathReady(location.pathname)}
              toggleSidebar={() => sidebarRef.current?.hide()}
            />
          )}
        </Location>
      </SidebarBody>
    </Sidebar>
  );
};

export default forwardRef(SidebarCustom);
