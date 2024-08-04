import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/login",
    name: "loginComponent",
    component: () => import("@/components/LoginComponent.vue"),
  },
  {
    path: "/signup",
    name: "SignupComponent",
    component: () => import("@/components/SignupComponent.vue"),
  },
    {
      path: "/",
      name: "SkeletonComponent",
      component: () => import("@/components/SkeletonComponent.vue"),
      children: [
        {
          path: "",
          name: "homepagecomp",
          component: () => import("@/components/HomePage.vue")
        },
        {
          path: "poets",
          name: "Poetscomp",
          component: () => import("@/components/PoetsComponent/AllPoetsComponent.vue")
        },
        {
          path: "books",
          name: "BooksComp",
          component: () => import("@/components/BookComponents/BooksComponent.vue")
        },
        {
          path: "poetry",
          name: "PoetrysComp",
          component: () => import("@/components/PoetryComponent.vue")
        },
        
        {
          path: "dictionary",
          name: "dictionaryComp",
          component: () => import("@/components/DictionaryComponent.vue")
        },
        {
          path: "favourites",
          name: "FavouriteComponent",
          component: () => import("@/components/Favourites/FavouriteCollection.vue")
        },
        {
          path: "user-profile",
          name: "UserprofileComponent",
          component: () => import("@/components/UserProfile.vue")
        },
        {
          path: "collections",
          name: "CollectionsComponent",
          component: () => import("@/components/CollectionComponent.vue")
        },
        {
          path: "manage",
          name: "ManageComponent",
          component: () => import("@/components/Manage/ManageComponent.vue")
        },
      ]
    }
  ];
  
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
