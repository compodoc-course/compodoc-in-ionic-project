'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`<nav>
    <ul class="list">
        <li class="title">
            <a href="index.html" data-type="index-link">compodocExample documentation</a>
        </li>
        <li class="divider"></li>
        ${ isNormalMode ? `<div id="book-search-input" role="search">
    <input type="text" placeholder="Type to search">
</div>
` : '' }
        <li class="chapter">
            <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
            <ul class="links">
                    <li class="link">
                        <a href="overview.html" data-type="chapter-link">
                            <span class="icon ion-ios-keypad"></span>Overview
                        </a>
                    </li>
                    <li class="link">
                        <a href="index.html" data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>README
                        </a>
                    </li>
                    <li class="link">
                        <a href="dependencies.html"
                            data-type="chapter-link">
                            <span class="icon ion-ios-list"></span>Dependencies
                        </a>
                    </li>
            </ul>
        </li>
        <li class="chapter modules">
            <a data-type="chapter-link" href="modules.html">
                <div class="menu-toggler linked" data-toggle="collapse"
                    ${ isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                    <span class="icon ion-ios-archive"></span>
                    <span class="link-name">Modules</span>
                    <span class="icon ion-ios-arrow-down"></span>
                </div>
            </a>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                    <li class="link">
                        <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-AppModule-5a6add2d18de27f87caecfc6114bcbc9"' : 'data-target="#xs-components-links-module-AppModule-5a6add2d18de27f87caecfc6114bcbc9"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-AppModule-5a6add2d18de27f87caecfc6114bcbc9"' : 'id="xs-components-links-module-AppModule-5a6add2d18de27f87caecfc6114bcbc9"' }>
                                        <li class="link">
                                            <a href="components/MyApp.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">MyApp</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-AppModule-5a6add2d18de27f87caecfc6114bcbc9"' : 'data-target="#xs-injectables-links-module-AppModule-5a6add2d18de27f87caecfc6114bcbc9"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-AppModule-5a6add2d18de27f87caecfc6114bcbc9"' : 'id="xs-injectables-links-module-AppModule-5a6add2d18de27f87caecfc6114bcbc9"' }>
                                        <li class="link">
                                            <a href="injectables/Api.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>Api</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/Items.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>Items</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/User.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>User</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/CardsPageModule.html" data-type="entity-link">CardsPageModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-CardsPageModule-87535e682b5f4ba477676e9a994798eb"' : 'data-target="#xs-components-links-module-CardsPageModule-87535e682b5f4ba477676e9a994798eb"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-CardsPageModule-87535e682b5f4ba477676e9a994798eb"' : 'id="xs-components-links-module-CardsPageModule-87535e682b5f4ba477676e9a994798eb"' }>
                                        <li class="link">
                                            <a href="components/CardsPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardsPage</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/ContentPageModule.html" data-type="entity-link">ContentPageModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-ContentPageModule-eba146cd537b2b0fa314e76111b87df6"' : 'data-target="#xs-components-links-module-ContentPageModule-eba146cd537b2b0fa314e76111b87df6"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-ContentPageModule-eba146cd537b2b0fa314e76111b87df6"' : 'id="xs-components-links-module-ContentPageModule-eba146cd537b2b0fa314e76111b87df6"' }>
                                        <li class="link">
                                            <a href="components/ContentPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContentPage</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/ItemCreatePageModule.html" data-type="entity-link">ItemCreatePageModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-ItemCreatePageModule-4ea9c90e8fc89ef54aca30b637f06c03"' : 'data-target="#xs-components-links-module-ItemCreatePageModule-4ea9c90e8fc89ef54aca30b637f06c03"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-ItemCreatePageModule-4ea9c90e8fc89ef54aca30b637f06c03"' : 'id="xs-components-links-module-ItemCreatePageModule-4ea9c90e8fc89ef54aca30b637f06c03"' }>
                                        <li class="link">
                                            <a href="components/ItemCreatePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ItemCreatePage</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/ItemDetailPageModule.html" data-type="entity-link">ItemDetailPageModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-ItemDetailPageModule-b8d58ab34767c30b48b005db53b48926"' : 'data-target="#xs-components-links-module-ItemDetailPageModule-b8d58ab34767c30b48b005db53b48926"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-ItemDetailPageModule-b8d58ab34767c30b48b005db53b48926"' : 'id="xs-components-links-module-ItemDetailPageModule-b8d58ab34767c30b48b005db53b48926"' }>
                                        <li class="link">
                                            <a href="components/ItemDetailPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ItemDetailPage</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/ListMasterPageModule.html" data-type="entity-link">ListMasterPageModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-ListMasterPageModule-71baafd94362ee1ffb56610a3fb66262"' : 'data-target="#xs-components-links-module-ListMasterPageModule-71baafd94362ee1ffb56610a3fb66262"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-ListMasterPageModule-71baafd94362ee1ffb56610a3fb66262"' : 'id="xs-components-links-module-ListMasterPageModule-71baafd94362ee1ffb56610a3fb66262"' }>
                                        <li class="link">
                                            <a href="components/ListMasterPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListMasterPage</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/LoginPageModule.html" data-type="entity-link">LoginPageModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-LoginPageModule-bd395b00a361d44bc99bdb0c749b95da"' : 'data-target="#xs-components-links-module-LoginPageModule-bd395b00a361d44bc99bdb0c749b95da"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-LoginPageModule-bd395b00a361d44bc99bdb0c749b95da"' : 'id="xs-components-links-module-LoginPageModule-bd395b00a361d44bc99bdb0c749b95da"' }>
                                        <li class="link">
                                            <a href="components/LoginPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginPage</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/MenuPageModule.html" data-type="entity-link">MenuPageModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-MenuPageModule-4046998e0e6370d1b9b6db547475c954"' : 'data-target="#xs-components-links-module-MenuPageModule-4046998e0e6370d1b9b6db547475c954"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-MenuPageModule-4046998e0e6370d1b9b6db547475c954"' : 'id="xs-components-links-module-MenuPageModule-4046998e0e6370d1b9b6db547475c954"' }>
                                        <li class="link">
                                            <a href="components/MenuPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuPage</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/SearchPageModule.html" data-type="entity-link">SearchPageModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-SearchPageModule-7978c4696cd7a7278fa79f31b55032a1"' : 'data-target="#xs-components-links-module-SearchPageModule-7978c4696cd7a7278fa79f31b55032a1"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-SearchPageModule-7978c4696cd7a7278fa79f31b55032a1"' : 'id="xs-components-links-module-SearchPageModule-7978c4696cd7a7278fa79f31b55032a1"' }>
                                        <li class="link">
                                            <a href="components/SearchPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SearchPage</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/SettingsPageModule.html" data-type="entity-link">SettingsPageModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-SettingsPageModule-28c84846b7363f18007b09b4b6eed78c"' : 'data-target="#xs-components-links-module-SettingsPageModule-28c84846b7363f18007b09b4b6eed78c"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-SettingsPageModule-28c84846b7363f18007b09b4b6eed78c"' : 'id="xs-components-links-module-SettingsPageModule-28c84846b7363f18007b09b4b6eed78c"' }>
                                        <li class="link">
                                            <a href="components/SettingsPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SettingsPage</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/SignupPageModule.html" data-type="entity-link">SignupPageModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-SignupPageModule-20ae0cd00b99a1f54abb1c5312090dff"' : 'data-target="#xs-components-links-module-SignupPageModule-20ae0cd00b99a1f54abb1c5312090dff"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-SignupPageModule-20ae0cd00b99a1f54abb1c5312090dff"' : 'id="xs-components-links-module-SignupPageModule-20ae0cd00b99a1f54abb1c5312090dff"' }>
                                        <li class="link">
                                            <a href="components/SignupPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SignupPage</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/TabsPageModule.html" data-type="entity-link">TabsPageModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-TabsPageModule-fab725389e189177bb32b7ad8d860a8c"' : 'data-target="#xs-components-links-module-TabsPageModule-fab725389e189177bb32b7ad8d860a8c"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-TabsPageModule-fab725389e189177bb32b7ad8d860a8c"' : 'id="xs-components-links-module-TabsPageModule-fab725389e189177bb32b7ad8d860a8c"' }>
                                        <li class="link">
                                            <a href="components/TabsPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TabsPage</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/TutorialPageModule.html" data-type="entity-link">TutorialPageModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-TutorialPageModule-afd13bdb1632fc657b626d1d8ae0c8ca"' : 'data-target="#xs-components-links-module-TutorialPageModule-afd13bdb1632fc657b626d1d8ae0c8ca"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-TutorialPageModule-afd13bdb1632fc657b626d1d8ae0c8ca"' : 'id="xs-components-links-module-TutorialPageModule-afd13bdb1632fc657b626d1d8ae0c8ca"' }>
                                        <li class="link">
                                            <a href="components/TutorialPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TutorialPage</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/WelcomePageModule.html" data-type="entity-link">WelcomePageModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-WelcomePageModule-6ead0cb9c1f328ca3dc4ddc931cd42f0"' : 'data-target="#xs-components-links-module-WelcomePageModule-6ead0cb9c1f328ca3dc4ddc931cd42f0"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-WelcomePageModule-6ead0cb9c1f328ca3dc4ddc931cd42f0"' : 'id="xs-components-links-module-WelcomePageModule-6ead0cb9c1f328ca3dc4ddc931cd42f0"' }>
                                        <li class="link">
                                            <a href="components/WelcomePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">WelcomePage</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
            </ul>
        </li>
                <li class="chapter">
                    <div class="simple menu-toggler" data-toggle="collapse"
                        ${ isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"' }>
                        <span class="icon ion-md-arrow-round-down"></span>
                        <span>Injectables</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse"
                    ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                            <li class="link">
                                <a href="injectables/Api.html" data-type="entity-link">Api</a>
                            </li>
                            <li class="link">
                                <a href="injectables/Items-1.html" data-type="entity-link">Items</a>
                            </li>
                            <li class="link">
                                <a href="injectables/Settings.html" data-type="entity-link">Settings</a>
                            </li>
                            <li class="link">
                                <a href="injectables/User.html" data-type="entity-link">User</a>
                            </li>
                    </ul>
                </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
                ${ isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"' }>
                <span class="icon ion-md-information-circle-outline"></span>
                <span>Interfaces</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                    <li class="link">
                        <a href="interfaces/PageItem.html" data-type="entity-link">PageItem</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Slide.html" data-type="entity-link">Slide</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"' }>
                <span class="icon ion-ios-cube"></span>
                <span>Miscellaneous</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                    <li class="link">
                      <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                    </li>
                    <li class="link">
                      <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                    </li>
                    <li class="link">
                      <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
        </li>
        <li class="divider"></li>
        <li class="copyright">
                Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.svg" class="img-responsive" data-type="compodoc-logo">
                </a>
        </li>
    </ul>
</nav>`);
        this.innerHTML = tp.strings;
    }
});
