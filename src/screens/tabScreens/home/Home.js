import { StyleSheet, Dimensions, View, ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";
import TopContainer from "./components/topContainer/TopContainer";
import BottomContainer from "./components/bottomContainer/BottomContainer";
import { useDispatch } from "react-redux";
import { fetchCategories } from "../../../redux/categoriesSlice";
import { fetchQuestions } from "../../../redux/questionsSlice";
const { height } = Dimensions.get("window");

const Home = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  ////API ISTEKLERI
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchQuestions());
    setLoading(false);
  }, [dispatch]);
  //////////////////////////////

  /* Search Bar içeren kısım için TopContainer, sayfa gövdesi için BottomContainer componentini oluşturdum. */

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <>
          <TopContainer style={styles.topContainer} />
          <BottomContainer style={styles.bottomContainer} />
        </>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBFAFA",
  },
  topContainer: {
    flex: height > 720 ? 0.22 : 0.24,
  },
  bottomContainer: {
    flex: height > 720 ? 0.78 : 0.76,
  },
});
