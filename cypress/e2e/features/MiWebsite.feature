@mi
Feature: Mi India website testing

  Background:
    Given I go to the Mi India website
    And I should see the Mi India page title

  @smoke
  Scenario: Search for Redmi phone
    Given I search for "Redmi" product
    When I click on the first product
    Then I should see the product details for "Redmi"
    And the product image should be visible

  Scenario Outline: Search for different products
    Given I search for "<product>" product
    When I click on the first product
    Then I should see the product details for "<product>"

    Examples:
      | product |
      | Mi Band |
      | Xiaomi  |
      | Redmi   |