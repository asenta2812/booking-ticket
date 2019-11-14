import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { showArticleByCategory } from "dispatchers";

import {
  Container, MainContainer, TitleContainer, Main
} from "./styles.js";
import ArticleList from "../Article/ArticleList";

class CategoryArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      articles: [],
    };
  }

  componentDidMount() {
    const { category } = this.props.match.params;
    this.props.showArticleByCategory(category);
  }

  componentDidUpdate(prevProps) {
    const { category } = this.props.match.params;
    if (category !== prevProps.match.params.category) {
      this.props.showArticleByCategory(category);
    }
  }

  render() {
    const { articles } = this.props.article;
    const { category } = this.props.match.params;
    return (
      <div>
        <Container>
          <MainContainer>
            <TitleContainer>
              ARTICLES/{ category }
            </TitleContainer>
            <Main>
              {articles.map((item, i) =>
                <ArticleList key={i} item={item}/>
              )}
            </Main>
          </MainContainer>
        </Container>
      </div>
    );
  }
}

CategoryArticle.propTypes = {
  article: PropTypes.object,
  showArticleByCategory: PropTypes.func,
  match: PropTypes.shape({
    params: PropTypes.shape({
      category: PropTypes.string.isRequired
    })
  }),
};

CategoryArticle.defaultProps = {
  article: {},
};

const mapStateToProps = state => {
  return {
    article: state.article
  };
};

const mapDispatchToProps = {
  showArticleByCategory
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryArticle);