import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
  SafeAreaView,
} from 'react-native';
import svgImage from './assets/svg';
import {GradientPrimaryColor} from './components/conntants';
import CircularMotionViews from './components/Heder';
import LinearGradient from 'react-native-linear-gradient';

const tabOptions = ['Basic', 'Chart', 'KP', 'Ashtakvarga', 'Dasha', 'Report'];
const planetOptions = {
  header: [
    {title: 'Planet'},
    {title: 'Sign'},
    {title: 'Sign Lord'},
    {title: 'Degree'},
    {title: 'House'},
  ],
  astroData: [
    {
      planet: 'Ascendant',
      sign: 'Pisces',
      signLord: 'Jupiter',
      degree: "13°13'24",
      house: 1,
    },
    {
      planet: 'Sun',
      sign: 'Sagittarius',
      signLord: 'Jupiter',
      degree: "13°13'24",
      house: 10,
    },
    {
      planet: 'Moon',
      sign: 'Aries',
      signLord: 'Mars',
      degree: "13°13'24",
      house: 2,
    },
    {
      planet: 'Mercury',
      sign: 'Capricorn',
      signLord: 'Saturn',
      degree: "13°13'24",
      house: 11,
    },
    {
      planet: 'Venus',
      sign: 'Capricorn',
      signLord: 'Saturn',
      degree: "13°13'24",
      house: 11,
    },
    {
      planet: 'Mars',
      sign: 'Capricorn',
      signLord: 'Saturn',
      degree: "13°13'24",
      house: 11,
    },
    {
      planet: 'Jupiter',
      sign: 'Sagittarius',
      signLord: 'Jupiter',
      degree: "13°13'24",
      house: 12,
    },
    {
      planet: 'Saturn',
      sign: 'Aquarius',
      signLord: 'Jupiter',
      degree: "13°13'24",
      house: 12,
    },
    {
      planet: 'Rahu',
      sign: 'Virgo',
      signLord: 'Mercury',
      degree: "13°13'24",
      house: 12,
    },
    {
      planet: 'Ketu',
      sign: 'Pisces',
      signLord: 'Jupiter',
      degree: "13°13'24",
      house: 12,
    },
    {
      planet: 'Neptune',
      sign: 'Capricorn',
      signLord: 'Saturn',
      degree: "13°13'24",
      house: 12,
    },
    {
      planet: 'Uranus',
      sign: 'Capricorn',
      signLord: 'Saturn',
      degree: "13°13'24",
      house: 12,
    },
    {
      planet: 'Pluto',
      sign: 'Capricorn',
      signLord: 'Saturn',
      degree: "13°13'24",
      house: 12,
    },
  ],
};
const GradientButton = ({title}) => (
  <LinearGradient
    colors={['#70E1F5', '#FFD194']}
    start={{x: 0, y: 0}}
    end={{x: 1, y: 0}}
    style={{
      marginRight: 16,
      paddingHorizontal: 14,
      paddingVertical: 10,
      borderRadius: 20,
    }}>
    <Text
      style={{
        color: '#000',
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 18,
      }}>
      {title}
    </Text>
  </LinearGradient>
);

const TableUI = () => {
  const renderItem = ({item}) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.planet}</Text>
      <Text style={styles.cell}>{item.sign}</Text>
      <Text style={styles.cell}>{item.signLord}</Text>
      <Text style={styles.cell}>{item.degree}</Text>
      <Text style={[styles.cell, {borderRightWidth: 0}]}>{item.house}</Text>
    </View>
  );

  return (
    <View style={{}}>
      <View style={styles.tableHeader}>
        <Text style={styles.headerCell}>Planet</Text>
        <Text style={styles.headerCell}>Sign</Text>
        <Text style={styles.headerCell}>Sign Lord</Text>
        <Text style={styles.headerCell}>Degree</Text>
        <Text style={[styles.headerCell, {borderRightWidth: 0}]}>House</Text>
      </View>
      <FlatList
        data={planetOptions.astroData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <View style={{position: 'absolute', width: '100%', height: '60%'}}>
        <CircularMotionViews />
      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <LinearGradient
          colors={['rgba(255, 255, 255, 0.08)', 'rgba(255, 255, 255, 0.1)']}
          style={{
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            marginBottom: 30,
          }}>
          <SafeAreaView />
          <View style={styles.header}>
            <svgImage.LeftArrow />
            <Text style={styles.headerText}>Kundali</Text>
          </View>
          <View style={styles.tabBar}>
            {tabOptions.map((tab, index) => (
              <Text
                key={index}
                style={[styles.tabItem, tab === 'Chart' && styles.activeTab]}>
                {tab}
                {index + 1 !== tabOptions.length && ' | '}
              </Text>
            ))}
          </View>
        </LinearGradient>
        <View style={styles.chartContainer}>
          <Image
            source={require('./assets/png/kundli-frame.png')}
            style={{height: 236}}
            resizeMethod="resize"
            resizeMode="contain"
          />
        </View>

        <View style={styles.planetsContainer}>
          <Text style={styles.planetsTitle}>Planets</Text>
          <View style={styles.planetsTabs}>
            <LinearGradient
              colors={['rgba(255, 255, 255, 0.08)', 'rgba(255, 255, 255, 0.1)']}
              style={styles.planetsTab}>
              <Text style={styles.planetsTabText}>Sign</Text>
            </LinearGradient>
            <GradientButton title={'Nakshatra'} />
            {/* <Text style={styles.planetsTab}>Nakshatra</Text> */}
          </View>
          {/* Replace this with your table component */}
          <LinearGradient
            colors={['rgba(255, 255, 255, 0.08)', 'rgba(255, 255, 255, 0.1)']}
            style={styles.table}>
            <TableUI />
          </LinearGradient>
        </View>

        <View style={styles.kundaliDetails}>
          <Text style={styles.kundliTabsTitle}>Understanding your Kundli</Text>
          <View style={styles.kundaliTabs}>
            {['General', 'Planetary', 'Yoga'].map((item, index) =>
              index === 0 ? (
                <GradientButton title={item} />
              ) : (
                <LinearGradient
                  colors={[
                    'rgba(255, 255, 255, 0.08)',
                    'rgba(255, 255, 255, 0.1)',
                  ]}
                  style={styles.planetsTab}
                  key={index}>
                  <Text style={styles.planetsTabText}>{item}</Text>
                </LinearGradient>
              ),
            )}
          </View>
          {['Description', 'Personality', 'Career', 'Health'].map(
            (section, index) => (
              <LinearGradient
                colors={[
                  'rgba(255, 255, 255, 0.08)',
                  'rgba(255, 255, 255, 0.1)',
                ]}
                key={index}
                style={styles.detailSection}>
                <Text style={styles.sectionTitle}>{section}</Text>
                <Text style={styles.sectionContent}>
                  Ascendant is one of the most sought concepts in astrology when
                  it comes to predicting the minute events in your life. At the
                  time of birth, the sign that rises in the sky is the person's
                  ascendant. it helps in making predictions about the minute
                  events, unlike your moon or sun sign that help in making
                  weekly, monthly or yearly prediction for you. Your ascendant
                  is Pisces.{' '}
                </Text>
              </LinearGradient>
            ),
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GradientPrimaryColor,
  },
  scrollView: {
    // padding: 16,
    // display:"none"
  },
  header: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 14,
    paddingBottom: 24,
    paddingHorizontal: 24,
    gap:8
  },
  headerText: {
    color: '#FFFFFF',
    fontFamily: 'Raleway-Medium',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 21.13,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 11,
    paddingHorizontal: 24,
    // marginBottom: 20,
  },
  tabItem: {
    color: '#BFBFBF',
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    fontWeight: '300',
    lineHeight: 21,
  },
  activeTab: {
    color: '#fff',
    fontFamily: 'Poppins-Semibold',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 21,
  },
  chartContainer: {
    paddingHorizontal: 24,
    alignItems: 'center',
    marginBottom: 38,
  },
  chart: {
    width: 200,
    height: 200,
    backgroundColor: '#333',
    borderRadius: 16,
    borderColor: '#fff',
    borderWidth: 1,
  },
  planetsContainer: {
    paddingHorizontal: 24,
    // marginBottom: 20,
  },
  planetsTitle: {
    color: '#fff',
    marginBottom: 10,
    fontFamily: 'Poppins-Medium',
    fontSize: 17,
    fontWeight: '500',
    lineHeight: 25.5,
  },
  planetsTabs: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  planetsTab: {
    // backgroundColor: '#4A4B4D',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginRight: 16,
  },
  planetsTabText: {
    color: '#fff',
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
  },
  table: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 12,
    marginBottom: 30,
    overflow: 'hidden',
  },
  kundaliDetails: {
    marginBottom: 30,
    paddingHorizontal: 24,
  },
  kundliTabsTitle: {
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    fontSize: 17,
    fontWeight: '500',
    lineHeight: 25.5,
    marginBottom: 20,
  },
  kundaliTabs: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  kundaliTab: {
    color: '#BFBFBF',
    fontSize: 16,
    marginRight: 10,
  },
  activeKundaliTab: {
    color: '#fff',
    fontWeight: 'bold',
  },
  detailSection: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },
  sectionContent: {
    color: '#BFBFBF',
    fontSize: 14,
  },
  tableContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#1F1F1F',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },
  headerCell: {
    flex: 1,
    color: '#FFF',
    textAlign: 'center',
    borderRightWidth: 1,
    borderColor: '#cccccc',
    paddingVertical: 11,

    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 18,
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    color: '#FFF',
    textAlign: 'center',
    borderRightWidth: 1,
    borderColor: '#cccccc',
    paddingVertical: 10,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
  },
});

export default App;
