import React from 'react';
import { UncontrolledDropdown } from 'reactstrap/lib/Uncontrolled';
import DropdownToggle from 'reactstrap/lib/DropdownToggle';
import DropdownMenu from 'reactstrap/lib/DropdownMenu';
import DropdownItem from 'reactstrap/lib/DropdownItem';

interface IProps {
  t: (key: string) => string;
  username: string;
  paths: any;
  currentPathname: string;
  navigateToAccount: () => void;
  logout: () => void;
}

const AccountDropdown: React.SFC<IProps> = (props) => {
  const { t, username, paths, currentPathname, navigateToAccount, logout } = props;

  const cursorStyle = { cursor: 'pointer' };
  const isAccountPath = currentPathname === paths.account;

  return (
    <UncontrolledDropdown nav={true} inNavbar={true}>
      <DropdownToggle caret={true} nav={true} className={isAccountPath ? 'active' : ''}>
        {username}
      </DropdownToggle>
      <DropdownMenu right={true} size="sm">
        <DropdownItem className="text-secondary" style={cursorStyle} onClick={navigateToAccount}>
          {t('account.account')}
        </DropdownItem>
        <DropdownItem className="text-secondary" style={cursorStyle} onClick={logout}>
          {t('link.signOut')}
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default AccountDropdown;
