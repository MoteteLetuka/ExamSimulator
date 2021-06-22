using Xunit;
using System;
using System.Threading.Tasks;
using System.Net.Http;
namespace API
{
    public class APIIntegrationTests
    {
        [Theory]
        [InlineData("/subject")]
        [InlineData("/question")]
        [InlineData("/paper")]
        [InlineData("/exam")]
        public async Task Get_EndpointsReturnSuccessAndCorrectContentType(string url)
        /*Test the entire API pipeline*/
        {
            // Arrange
            var client = new HttpClient();

            // Act
            var apiResponse = await client.GetAsync("https://localhost:5001/api"+url);

            // Assert
            apiResponse.EnsureSuccessStatusCode(); // Status Code 200-299
            Assert.Equal("application/json; charset=utf-8", 
                apiResponse.Content.Headers.ContentType.ToString());
        }       
    }
}