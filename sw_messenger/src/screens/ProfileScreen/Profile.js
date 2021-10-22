import React, {useState} from 'react';
import {Text, View, Image} from 'react-native';
import {Header} from '../../components/ui-kit/Header/Header';
import {Button} from '../../components/ui-kit/Button/Button';
import {MoreDetails} from '../../components/ModalMoreDetails/ModalMoreDetails';
import {PhotoGrid} from '../../components/PhotoGrid/PhotoGrid';
import styles from './ProfileStyle';

const Profile = props => {
  const [moreDetails, setMoreDetails] = useState(false);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.avatar}>
        <Image source={props.selfInf.profilePhoto} />
      </View>
      <View style={styles.name}>
        <Text style={styles.textName}>{props.selfInf.name}</Text>
        <Text style={styles.textSurname}>{props.selfInf.link}</Text>
      </View>
      <View style={styles.locate}>
        <Text style={styles.textCountry}>
          {props.selfInf.country}, {props.selfInf.city}
        </Text>
        <Text style={styles.textWork}>
          Место работы: {props.selfInf.workplace}
        </Text>
      </View>

      <View style={styles.countsModule}>
        <View style={styles.followers}>
          <Text style={styles.numberFollowers}>2,467</Text>
          <Text style={styles.textFollower}>Followers</Text>
        </View>
        <View style={styles.following}>
          <Text style={styles.numberFollowing}>1,589</Text>
          <Text style={styles.textFollowing}>Following</Text>
        </View>
        <Button onClick={() => setMoreDetails(true)} />
      </View>
      <MoreDetails
        visible={moreDetails}
        onCancel={() => setMoreDetails(false)}
        selfInf={props.selfInf}
        social={props.social}
      />

      <View style={styles.divider}></View>
      <View style={styles.photo}>
        <View style={styles.labelPhoto}>
          <Text style={styles.textPhoto}>Фотографии</Text>
          <Text style={styles.countPhoto}>245</Text>
        </View>
        <PhotoGrid data={props.photo} />
      </View>

      <View style={styles.footer} />
    </View>
  );
};

export default Profile;
