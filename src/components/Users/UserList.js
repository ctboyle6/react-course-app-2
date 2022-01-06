import Card from '../UI/Card';
import styles from './UserList.module.css';

const UserList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        <li>Test</li>
        <li>Test</li>
        <li>Test</li>
      </ul>
    </Card>
  );
}

export default UserList
